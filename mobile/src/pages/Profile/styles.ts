import { css, styled } from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    align-items: center;
  `}
`;

export const ProfileContainer = styled.View`
  padding: 0px 24px;
  padding-top: 32px;
  padding-bottom: 12px;
  width: 100%;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: ${width * 0.5}px;
  height: ${width * 0.5}px;
  border-radius: ${width * 100}px;
  margin-bottom: 12px;
`;

export const ProfileName = styled.Text`
  ${({ theme }) => css`
    font-size: 35px;
    font-family: ${theme.fontFamilies.title};
    color: ${theme.colors.secondary_text};
    margin-bottom: 4px;
  `}
`;

export const ProfileLocation = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.secondary_text + "DD"};
    margin-bottom: 20px;
  `}
`;

export const SelectableContainer = styled.View`
  width: 100%;
`;

export const SelectableMenu = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SelectableMenuOption = styled.Pressable`
  display: flex;
  flex: 1;
  align-items: center;

`;

type SelectableMenuOptionProps = {
  selected: boolean;
}

export const SelectableMenuText = styled.Text<SelectableMenuOptionProps>`
  ${({ theme, selected }) => css`
    width: 100%;
    font-size: 16px;
    padding: 12px;
    font-family: ${theme.fontFamilies.text_highlight};
    color: ${selected ? theme.colors.primary : theme.colors.tertiary_text};
    text-align: center;
  `}
`;

export const SelectableMenuLine = styled.View<SelectableMenuOptionProps>`
  ${({ theme, selected }) => css`
    width: 100%;
    height: 3px;
    background-color: ${selected ? theme.colors.primary : theme.colors.tertiary_text};
  `}
`;

export const AchievementsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;