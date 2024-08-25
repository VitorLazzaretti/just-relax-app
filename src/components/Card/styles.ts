import { css } from "styled-components";
import { styled } from "styled-components/native";

export const Container = styled.View`
  /* height: 170px; */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  flex-direction: row;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const LeftContent = styled.View`
  flex: 13;
  justify-content: center;
`;

export const RightContent = styled.View`
  flex: 10;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.title == 'dark' ? theme.colors.background : theme.colors.primary};
    font-family: ${theme.fontFamilies.title};
    font-size: 24px;
    position: relative;
    width: 300px;
    z-index: 1;
  `};
`;

export const CardImage = styled.Image`
  width: 140px;
  height: 120px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.title == 'dark' ? theme.colors.background : theme.colors.tertiary_text};
    padding: 3px;
  `};
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.title === 'light' ? theme.colors.primary : theme.colors.background};
    width: 130px;
    margin-top: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
    border-radius: 12px;
  `};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.button_text};
    font-family: ${theme.fontFamilies.description};
    font-size: 16px;
  `};
`