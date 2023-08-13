import { css, styled } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;
    background-color: ${theme.colors.background};
    position: relative;
    padding: 20px 24px;
  `};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 60px;
    width: 100%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  `}; 
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-family: ${theme.fontFamilies.description};
    letter-spacing: 4px;
    color: ${theme.colors.background};
  `}
`;

export const ContainerImage = styled.View`
  position: absolute;
  bottom: 0px;
  transform: scale(1.2);
  z-index: -999;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    font-family: ${theme.fontFamilies.title};
    color: ${theme.colors.text};
  `};
`;

export const ContainerLogo = styled.View`
  margin-bottom: 32px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 22px;
    padding: 4px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.secondary_text};
  `};
`;

export const Form = styled.View`
  margin-top: 32px;
  gap: 24px;
  margin-bottom: 20px;
`;

export const ForgotPassword = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.tertiary_text};
    align-self: flex-end;
    margin-top: 12px;
    padding-bottom: 16px;
    padding-left: 16px;
  `};
`;

export const View = styled.View``;

export const Highlight = styled.Text`
  font-family: ${({ theme }) => theme.fontFamilies.text_highlight};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonDescription = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.secondary_text};
    align-self: center;
    margin-top: 16px;
    padding: 0px 16px 16px 16px;
  `};
`;
