import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { CalendarList, CalendarProps } from 'react-native-calendars';
import { useTheme } from '../../contexts/theme';
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../../layout/MainLayout';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { useAuth } from '../../contexts/auth';
import { db } from '../../config/firebase';
import { useDots } from '../../contexts/dots';

const GratitudeCalendar = () => {
  const navigator = useNavigation();
  const { theme } = useTheme();

  const { markedDates, getDots } = useDots();

  useEffect(() => {
    getDots();
  }, []);

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
          textDayFontFamily: theme.fontFamilies.description,
          textMonthFontFamily: theme.fontFamilies.title,
          textDayHeaderFontFamily: theme.fontFamilies.text_highlight,
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
        }}
        pastScrollRange={getCountPastMonthsSinceJanuary2023()}
        hideExtraDays={false}
        onDayPress={day => {
          navigator.navigate("JournalDocument", { date: day.dateString });
        }}
        refreshing
        markingType='multi-dot'
        markedDates={markedDates}
      />
    </MainLayout>
  );
}

export default GratitudeCalendar;