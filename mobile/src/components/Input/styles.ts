import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  padding: 0px 4px;
  height: 52px;
`;


export const InputText = styled(TextInput) <Props>`
  flex: 1;
  padding-left: 12px;
  padding-top: 8px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamilies.description};
  color: ${({ theme }) => theme.colors.tertiary_text};

  border-bottom-color: ${({ theme }) => theme.colors.secondary_text};    
  border-bottom-width: 1px;

  ${({ isFocused }) => isFocused && css`
    border-bottom-color: ${({ theme }) => theme.title == 'dark' ? theme.colors.primary : theme.colors.text};    
    color: ${({ theme }) => theme.title == 'dark' ? theme.colors.primary : theme.colors.text};    
  `};
`;