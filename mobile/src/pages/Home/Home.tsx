import React from "react";
import { View } from "react-native";

import {
  Container,
  Description,
  Title
} from "./styles";

import MoodSelector from "../../components/MoodSelector/MoodSelector";
import CardArea from "../../components/CardArea/CardArea";
import { useTheme } from "../../contexts/theme";
import MainLayout from "../../layout/MainLayout";

export default function Home() {
  const { toggleTheme } = useTheme();

  const handleSignOut = () => {
    toggleTheme();
  }

  return (
    <MainLayout>
      <Container bounces={false} snapToEnd={false} snapToStart={false}>
        <Title onPress={handleSignOut}> Welcome back, Vitor! </Title>
        <Description> How are you feeling today? </Description>

        <View style={{ marginVertical: 8 }}>
          <MoodSelector />
        </View>

        <View style={{ marginBottom: 80 }}>
          <CardArea />
        </View>
      </Container>
    </MainLayout>
  );
}
