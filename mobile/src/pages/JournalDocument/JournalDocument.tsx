import React, { useState } from 'react';
import {
  View
} from 'react-native';

import type { StackScreenProps } from "@react-navigation/stack";
import MoodSelector from '../../components/MoodSelector/MoodSelector';

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

type Props = StackScreenProps<AppRootParamList, "JournalDocument">;

const JournalDocument: React.FC<Props> = ({ navigation, route }) => {
  const [text, setText] = useState('');
  const { theme } = useTheme();

  if (!route.params.date) {
    navigation.goBack();
    return null;
  };

  const saveDocument = () => {
    navigation.goBack();
  }

  return (
    <MainLayout>

      <Container>
        <Title> How was your Mood today? </Title>
        <View>
          <MoodSelector />
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