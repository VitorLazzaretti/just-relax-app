import React, { useEffect } from 'react';

import Mood from '../Mood/Mood';
import Focus from '../../assets/Svg/Mood/Focus';
import Relax from '../../assets/Svg/Mood/Relax';
import Calm from '../../assets/Svg/Mood/Calm';
import Anxious from '../../assets/Svg/Mood/Anxious';
import Angry from '../../assets/Svg/Mood/Angry';
import Happy from '../../assets/Svg/Mood/Happy';

import { Container } from './styles'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/auth';
import { db } from '../../config/firebase';
import { format } from 'date-fns';

const MoodSelector = ({ date }: { date?: string }) => {
  const [selectedMoods, setSelectedMoods] = React.useState<string[]>([]);
  const [dailyDot, setDailyDot] = React.useState<boolean>(false);

  const { user } = useAuth();

  const moods = [
    {
      mood: 'Calm',
      MoodSvg: Calm
    },
    {
      mood: 'Relax',
      MoodSvg: Relax
    },
    {
      mood: 'Focus',
      MoodSvg: Focus
    },
    {
      mood: 'Anxious',
      MoodSvg: Anxious
    },
    {
      mood: 'Angry',
      MoodSvg: Angry,
    },
    {
      mood: 'Happy',
      MoodSvg: Happy
    },
  ];

  useEffect(() => {
    const getSelectedMoods = async () => {
      const index = user.uid;
      const today = getNecessaryDate();

      const docSnap = await getDoc(doc(db, "moods", "user", index, today));

      if (!docSnap.exists()) {
        return;
      }

      const data = docSnap.data();
      const selectedMoods = Object.keys(data).filter((key) => data[key]);

      setSelectedMoods(selectedMoods);
    }

    getSelectedMoods();

    return () => {
      setSelectedMoods([]);
    }
  }, []);

  const getNecessaryDate = () => {
    const today = date || format(new Date(), 'yyyy-MM-dd')
    return today;
  }

  const updateMoodList = async (mood: { mood: string }) => {
    if (selectedMoods.includes(mood.mood)) {
      setSelectedMoods(selectedMoods.filter((selectedMood) => selectedMood !== mood.mood));

      const item = {};
      item[mood.mood] = false;

      try {
        await setDoc(doc(db, "moods", "user", user.uid, getNecessaryDate()), item, { merge: true });

        const dot = {
          Mood: true
        };

        if (dailyDot) return;

        await setDoc(doc(db, "dots", "user", user.uid, getNecessaryDate()), dot, { merge: true });
        setDailyDot(true);
      } catch (error) {
        setSelectedMoods([...selectedMoods, mood.mood]);
      }

      return;
    }

    const index = user.uid;
    setSelectedMoods([...selectedMoods, mood.mood]);

    const item = {};
    item[mood.mood] = true;

    try {
      await setDoc(doc(db, "moods", "user", index, getNecessaryDate()), item, { merge: true });

      const dot = {
        Mood: true
      };

      if (dailyDot) return;

      await setDoc(doc(db, "dots", "user", user.uid, getNecessaryDate()), dot, { merge: true });
      setDailyDot(true);
    } catch (error) {
      setSelectedMoods(selectedMoods.filter((selectedMood) => selectedMood !== mood.mood));
    }
  }

  return (
    <Container>
      {moods.map((mood, index) => {
        return (
          <Mood
            key={index}
            mood={mood.mood}
            selected={selectedMoods.includes(mood.mood)}
            MoodSvg={mood.MoodSvg}
            moodList={selectedMoods}
            onPress={() => updateMoodList(mood)}
          />
        )
      })}
    </Container>
  );
}

export default MoodSelector;