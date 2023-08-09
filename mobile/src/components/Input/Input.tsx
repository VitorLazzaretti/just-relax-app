import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputText } from './styles';

export type InputProps = TextInputProps & {
  value?: string;
}

export function Input({ value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}
      />
    </Container>
  );
}