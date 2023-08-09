import { css, styled } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    align-items: center;
    justify-content: center;
  `};
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 56px;
    width: 80%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text};
  `};
`;