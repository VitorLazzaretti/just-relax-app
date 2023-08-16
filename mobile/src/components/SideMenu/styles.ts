import { Dimensions } from "react-native";
import { css, styled } from "styled-components/native";

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.black + "88"};
  `}
  height: ${height}px;
  width: ${width}px;
  position: absolute;
  z-index: 999;
  justify-content: center;
  align-items: flex-start;
  z-index: 9999;
  position: absolute;
`;

export const SideMenuContainer = styled.Pressable`
  flex: 4;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
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