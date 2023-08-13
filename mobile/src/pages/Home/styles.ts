import { css, styled } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    font-family: ${theme.fontFamilies.title};
    color: ${theme.colors.text};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 22px;
    padding: 4px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.secondary_text};
  `};
`;