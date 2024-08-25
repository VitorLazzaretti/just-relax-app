import React from 'react';
import {
  Container,
  MainImage,
  ImageContainer,
  ImageTitle,
  ImageDescription,
  ImageInfoContainer,
  ImageButton,
  ImageButtonText,
  SoundSelectContainer
} from './styles';

import SoundOption from '../../components/SoundOption/SoundOption';
import IconMI from '../../components/Icon/IconMI';

import { useTheme } from '../../contexts/theme';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { meditationSounds } from '../../constants/meditationSounds';
import MainLayout from '../../layout/MainLayout';

const SelectSound: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handlePlay = (id: number) => {
    navigation.navigate("PlaySound", { meditationId: id.toString() });
  };

  return (
    <MainLayout>
      <Container bounces={false} snapToEnd={false} snapToStart={false}>
        <ImageContainer>
          <MainImage source={require('../../assets/meditation/art_landscape.jpg')}>
            <ImageInfoContainer>
              <View>
                <ImageTitle> Relax Sounds </ImageTitle>
                <ImageDescription> Sometimes the most productive thing you can do is relax. </ImageDescription>
              </View>
              <ImageButton onPress={() => { handlePlay(8) }}>
                <ImageButtonText> play now </ImageButtonText>
                <IconMI name="play-circle-filled" color={theme.colors.black} style={{ marginTop: 2 }} size={18} />
              </ImageButton>
            </ImageInfoContainer>
          </MainImage>
        </ImageContainer>

        <SoundSelectContainer>
          <FlatList
            scrollEnabled={false}
            style={{ marginVertical: 20, paddingBottom: 24 }}
            data={meditationSounds}
            renderItem={(sound) => {
              return (
                <SoundOption
                  title={sound.item.title}
                  listening={sound.item.listening}
                  image={sound.item.image}
                  duration={sound.item.duration}
                  onPress={() => handlePlay(sound.item.id)}
                />
              )
            }}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
          />
        </SoundSelectContainer>
      </Container>
    </MainLayout>
  )
}

export default SelectSound;