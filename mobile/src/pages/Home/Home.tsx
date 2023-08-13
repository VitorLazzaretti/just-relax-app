import React from "react";
import { useAuth } from "../../contexts/auth";
import { Container, Description, Title } from "./styles";
import { View } from "react-native";

import MoodSelector from "../../components/MoodSelector/MoodSelector";
import CardArea from "../../components/CardArea/CardArea";

export default function Home() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  }

  return (
    <Container bounces={false} snapToEnd={false} snapToStart={false}>
      <Title onPress={handleSignOut}> Welcome back, Anime! </Title>
      <Description> How are you feeling today? </Description>

      <View>
        <MoodSelector />
      </View>

      <View style={{ marginBottom: 80 }}>
        <CardArea />
      </View>
    </Container>
  );
}
