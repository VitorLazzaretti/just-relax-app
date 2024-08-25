import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputText } from './styles';
import { useTheme } from '../../contexts/theme';

export type InputProps = TextInputProps & {
  value?: string;
}

export function Input({ value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <InputText
        placeholderTextColor={theme.colors.tertiary_text}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}
      />
    </Container>
  );
}