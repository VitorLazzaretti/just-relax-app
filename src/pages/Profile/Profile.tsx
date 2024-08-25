import React, { useEffect, useState } from 'react';

import {
  Container,
  ProfileContainer,
  ProfileImage,
  ProfileLocation,
  ProfileName,
  SelectableContainer,
  SelectableMenu,
  SelectableMenuLine,
  SelectableMenuOption,
  SelectableMenuText,
  AchievementsContainer
} from './styles';

import {
  Image
} from "react-native";

import MainLayout from '../../layout/MainLayout';
import { useAuth } from '../../contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [menu, setMenu] = useState<"stats" | "achievements">("stats");
  const [username, setUsername] = useState<string | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    AsyncStorage.getItem('@name').then((name) => {
      setUsername(name);
    });
  }, []);

  return (
    <MainLayout>
      <Container>
        <ProfileContainer>
          <ProfileImage source={require("../../assets/profile-placeholder.jpg")} />
          <ProfileName> {username} </ProfileName>
          <ProfileLocation> {user.email} </ProfileLocation>
        </ProfileContainer>

        <SelectableContainer>
          <SelectableMenu>
            <SelectableMenuOption onPress={() => setMenu("stats")}>
              <SelectableMenuText selected={menu === 'stats'}> STATS </SelectableMenuText>
              <SelectableMenuLine selected={menu === 'stats'} />
            </SelectableMenuOption>
            <SelectableMenuOption onPress={() => setMenu("achievements")}>
              <SelectableMenuText selected={menu === 'achievements'}> ACHIEVEMENTS </SelectableMenuText>
              <SelectableMenuLine selected={menu === 'achievements'} />
            </SelectableMenuOption>
          </SelectableMenu>
        </SelectableContainer>

        {menu === "stats" && (
          <AchievementsContainer>
            <Image source={require("../../assets/medal.png")} style={{
              width: 150,
              height: 208,
              marginBottom: 20
            }} />
            <ProfileLocation> Coming Soon ... </ProfileLocation>
          </AchievementsContainer>
        )}


        {menu === 'achievements' && (
          <AchievementsContainer>
            <Image source={require("../../assets/medal.png")} style={{
              width: 150,
              height: 208,
              marginBottom: 20
            }} />
            <ProfileLocation> Coming Soon ... </ProfileLocation>
          </AchievementsContainer>
        )}
      </Container>
    </MainLayout>
  )
}

export default Profile;
