import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 24px;
    padding-top: 4px;
    padding-bottom: 32px;
  `}
`;

export const Title = styled.Text.attrs({
  allowFontScaling: false,
})`
  ${({ theme }) => css`
    font-size: 24px;
    font-family: ${theme.fontFamilies.title};
    color: ${theme.colors.text};
  `};
`;

export const Subtitle = styled.Text.attrs({
  allowFontScaling: false,
})`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.secondary_text};
  `};
`;

export const DocumentContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.surface};
  `};
  flex: 1;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  align-items: stretch;
  justify-content: center;
  position: relative;
  border-radius: 12px;
`;

export const DocumentInput = styled.TextInput.attrs({
  allowFontScaling: false,
  multiline: true,
})`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fontFamilies.description};
    color: ${theme.colors.black};
   background-color: transparent;
    padding: 20px;
    border-radius: 8px;
    line-height: 20px;
    text-align-vertical: top;
    flex: 1;
    position: relative;
    z-index: 5;
  `};
`;

export const EffectBackground = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 2;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  opacity: 0.5;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  `};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.title === 'light' ? theme.colors.button_text : theme.colors.black};
    font-family: ${theme.fontFamilies.text_highlight};
    font-size: 16px;
  `};
`