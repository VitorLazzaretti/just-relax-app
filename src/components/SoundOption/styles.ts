import { css, styled } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3
})`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 12px;
  `}
`;

export const SoundImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 20px;
`;

export const SoundInfoContainer = styled.View`
  flex: 1;
  margin-left: 18px;
`;

export const SoundTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamilies.title};
    font-size: 18px;
    color: ${theme.colors.text};
  `}
`;

export const SoundListening = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamilies.description};
    font-size: 14px;
    padding-left: 2px;
    color: ${theme.colors.secondary_text};
  `}
`;

export const SoundDuration = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamilies.description};
    font-size: 16px;
    color: ${theme.colors.secondary_text};
  `}
`;
