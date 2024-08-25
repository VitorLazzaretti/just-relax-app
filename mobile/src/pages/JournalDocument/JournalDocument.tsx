import React, { useEffect, useState } from 'react';
import {
  View
} from 'react-native';

import MoodSelector from '../../components/MoodSelector/MoodSelector';

import type { StackScreenProps } from "@react-navigation/stack";

import {
  Container,
  DocumentContainer,
  DocumentInput,
  Subtitle,
  Title,
  EffectBackground,
  Button,
  ButtonText
} from './styles';

import Logo from '../../components/Logo/Logo';
import { AppRootParamList } from '../../types/routes';
import { useTheme } from '../../contexts/theme';
import MainLayout from '../../layout/MainLayout';
import { getDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from '../../contexts/auth';
import { db } from '../../config/firebase';
import { useDots } from '../../contexts/dots';
import { format } from 'date-fns';

type Props = StackScreenProps<AppRootParamList, "JournalDocument">;

const JournalDocument: React.FC<Props> = ({ navigation, route }) => {
  const [text, setText] = useState('');
  const { theme } = useTheme();
  const { user } = useAuth();
  const journalDate = route.params.date;
  const today = format(new Date(), 'yyyy-MM-dd');
  const { markedDates, setMarkedDates } = useDots();

  if (!journalDate) {
    navigation.goBack();
    return null;
  };

  useEffect(() => {
    const loadDocument = async () => {
      const index = user.uid + journalDate.replace(/\//g, '');
      const docRef = doc(db, "journals", index);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setText(data.text);
      }
    }

    loadDocument();
  }, []);

  const saveDocument = async () => {
    const index = user.uid + journalDate.replace(/\//g, '');

    await setDoc(doc(db, "journals", index), {
      date: journalDate,
      text: text,
    }, { merge: true });

    await setDoc(doc(db, "dots", "user", user.uid, journalDate), {
      Gratitude: true
    }, { merge: true });

    setMarkedDates({
      ...markedDates,
      [journalDate]: {
        selected: journalDate === today,
        dots: [
          {
            key: 'Gratitude',
            color: theme.colors["gratitude"],
            selectedDotColor: theme.colors.table_dot
          },
          {
            key: 'Mood',
            color: theme.colors["mood"],
            selectedDotColor: theme.colors.table_dot
          }
        ],
      }
    })

    navigation.goBack();
  }

  return (
    <MainLayout>
      <Container>
        <Title> How was your Mood today? </Title>
        <View>
          <MoodSelector date={journalDate} />
        </View>
        <Title> What are you Grateful for today? </Title>
        <Subtitle> {route.params.date} </Subtitle>
        <DocumentContainer>
          <DocumentInput
            placeholder="I am grateful for..."
            value={text}
            onChangeText={setText}
          />
          <EffectBackground>
            <Logo size={128} color={theme.colors.background} />
          </EffectBackground>
        </DocumentContainer>
        <Button onPress={saveDocument} activeOpacity={0.4}>
          <ButtonText>
            {"Save Document - " + route.params.date}
          </ButtonText>
        </Button>
      </Container>
    </MainLayout>
  );
};

export default JournalDocument;