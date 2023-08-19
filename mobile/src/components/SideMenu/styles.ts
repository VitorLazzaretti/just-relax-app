import { Dimensions } from "react-native";
import { css, styled } from "styled-components/native";

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.black + "88"};
  `}
  height: 100%;
  width: ${width}px;
  position: absolute;
  z-index: 50;
  justify-content: center;
  align-items: flex-start;
  bottom: 0;
`;

export const SideMenuContainer = styled.Pressable`
  flex: 5;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const CloseArea = styled.Pressable`
  flex: 2;
`;

export const Description = styled.Text.attrs({
  allowFontScaling: false
})`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 18px;
    font-family: ${theme.fontFamilies.text_highlight};
  `}
`;