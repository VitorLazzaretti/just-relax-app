import React, { useState } from 'react';
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
  StyleSheet,
  // View,
  Image
} from "react-native";
// import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory-native";
import { useTheme } from '../../contexts/theme';

type Data = {
  kind: "Meditation" | "Mood";
  day: string
  value: number;
}

const data: Data[] = [
  { day: "Mon", kind: 'Meditation', value: 200 },
  { day: "Mon", kind: 'Mood', value: 100 },
  { day: "Tue", kind: 'Meditation', value: 350 },
  { day: "Tue", kind: 'Mood', value: 250 },
  { day: "Wed", kind: 'Meditation', value: 300 },
  { day: "Wed", kind: 'Mood', value: 500 },
  { day: "Thu", kind: 'Meditation', value: 700 },
  { day: "Thu", kind: 'Mood', value: 400 },
  { day: "Fri", kind: 'Meditation', value: 550 },
  { day: "Fri", kind: 'Mood', value: 300 },
  { day: "Sat", kind: 'Meditation', value: 650 },
  { day: "Sat", kind: 'Mood', value: 550 },
  { day: "Sun", kind: 'Meditation', value: 800 },
  { day: "Sun", kind: 'Mood', value: 450 },
];

const Profile = () => {
  const [menu, setMenu] = useState<"stats" | "achievements">("stats");
  const { theme } = useTheme();

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage source={require("../../assets/profile-placeholder.png")} />
        <ProfileName> Vitor Lazzaretti </ProfileName>
        <ProfileLocation> Jaraguá do Sul, Brazil </ProfileLocation>
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

      {/* {menu === "stats" && (
        <View style={styles.container}>
          <VictoryChart
            width={380}
            height={235}
          >
            <VictoryGroup
              offset={20}
            >
              <VictoryBar
                data={data.filter(x => x.kind === "Meditation")}
                x="day"
                y="value"
                alignment="start"
                cornerRadius={{ topLeft: 6, topRight: 6 }}
                style={{ data: { fill: theme.colors.primary } }}
              />
              <VictoryBar
                data={data.filter(x => x.kind === "Mood")}
                x="day"
                y="value"
                alignment="start"
                cornerRadius={{ topLeft: 6, topRight: 6 }}
                style={{ data: { fill: theme.colors.tertiary } }}

              />
            </VictoryGroup>
          </VictoryChart>
        </View>
      )} */}

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
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Profile;