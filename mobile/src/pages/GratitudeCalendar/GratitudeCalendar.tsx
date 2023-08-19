import { format } from 'date-fns';
import React, { useState } from 'react'
import { CalendarList, CalendarProps } from 'react-native-calendars';
import { useTheme } from '../../contexts/theme';
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../../layout/MainLayout';

enum Dots {
  mood = 'mood',
  gratitude = 'gratitude',
}

type RawDataProps = {
  date: string;
  dots: Dots[];
}

const GratitudeCalendar = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const today = format(new Date(), 'yyyy-MM-dd')

  const [markedDates, setMarkedDates] = useState<CalendarProps["markedDates"]>(() => {
    const rawData: RawDataProps[] = [
      { date: '2023-08-14', dots: [Dots.mood] },
      { date: '2023-08-13', dots: [Dots.mood] },
      { date: '2023-08-11', dots: [Dots.mood, Dots.gratitude] },
      { date: '2023-08-10', dots: [Dots.gratitude] },
      { date: '2023-08-09', dots: [Dots.mood, Dots.gratitude] },
      { date: '2023-08-08', dots: [Dots.mood] },
      { date: '2023-08-07', dots: [Dots.mood] },
      { date: '2023-08-06', dots: [Dots.mood, Dots.gratitude] },
      { date: '2023-08-05', dots: [Dots.mood] },
      { date: '2023-08-04', dots: [Dots.gratitude] },
      { date: '2023-08-02', dots: [Dots.mood, Dots.gratitude] },
      { date: '2023-08-01', dots: [Dots.mood, Dots.gratitude] },
    ]

    const data: CalendarProps["markedDates"] = {};

    rawData.forEach((item) => {
      data[item.date] = {
        selected: today === item.date,
        dots: item.dots.map((dot) => {
          return {
            key: dot,
            color: theme.colors[dot],
            selectedDotColor: theme.colors.table_dot
          }
        })
      }
    });

    if (!data[today]) {
      data[today] = {
        selected: true,
      }
    }

    return data;
  });

  const getCountPastMonthsSinceJanuary2023 = () => {
    const today = new Date();
    const January2023 = new Date(2023, 0, 1);
    const months = (today.getFullYear() - January2023.getFullYear()) * 12;
    return months - January2023.getMonth() + today.getMonth();
  };

  return (
    <MainLayout>
      <CalendarList
        futureScrollRange={24}
        showScrollIndicator={true}
        theme={{
          backgroundColor: theme.colors.background,
          calendarBackground: theme.colors.background,
          textSectionTitleColor: theme.colors.text,
          textSectionTitleDisabledColor: theme.colors.tertiary_text + "99",
          selectedDayBackgroundColor: theme.colors.table_primary,
          selectedDayTextColor: theme.colors.icon,
          todayTextColor: theme.title == 'light' ? theme.colors.table_primary : theme.colors.white,
          dayTextColor: theme.colors.secondary_text,
          textDisabledColor: theme.colors.tertiary_text + "99",
          dotColor: theme.colors.table_primary,
          selectedDotColor: theme.colors.icon,
          arrowColor: theme.colors.table_primary,
          disabledArrowColor: theme.colors.tertiary_text + "99",
          monthTextColor: theme.colors.text,
          indicatorColor: theme.colors.table_primary,
          // textDayFontFamily: theme.fontFamilies.description,
          // textMonthFontFamily: theme.fontFamilies.title,
          // textDayHeaderFontFamily: theme.fontFamilies.text_highlight,
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
        }}
        pastScrollRange={getCountPastMonthsSinceJanuary2023()}
        hideExtraDays={false}
        onDayPress={day => {
          navigation.navigate("JournalDocument", { date: day.dateString });
        }}
        markingType='multi-dot'
        markedDates={markedDates}
      />
    </MainLayout>
  );
}

export default GratitudeCalendar;