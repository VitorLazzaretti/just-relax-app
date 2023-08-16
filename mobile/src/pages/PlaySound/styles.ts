import { css, styled } from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 32px 24px;
    align-items: center;
  `}
`;

export const MeditationImage = styled.Image`
  width: ${width * 0.7}px;
  height: ${width * 0.7}px;
  border-radius: ${width * 100}px;
  margin-bottom: 24px;
`;

export const MeditationTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 36px;
    font-family: ${theme.fontFamilies.title};
    color: ${theme.colors.text + (theme.title === 'light' ? 'CC' : '')};
    text-align: center;
    width: 100%;
  `}
`;

export const MeditationDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.tertiary_text};
    text-align: center;
    margin-bottom: 24px;
    width: 100%;
  `}
`;

export const MediaControllerContainer = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PlayButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 76px;
    height: 76px;
    border-radius: 50px;
    background-color: ${theme.colors.primary};
    align-items: center;
    justify-content: center;
  `}
`;

export const GenericButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const SoundBarContainer = styled.View`
  width: 100%;
  padding: 0px 12px;
  height: 100px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SoundBarProgress = styled.Image`
  width: 100%;
`;