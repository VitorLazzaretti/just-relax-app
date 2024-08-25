
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input/Input';

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

import { Error } from './styles';
import { View } from 'react-native';

export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />

      {error && <Error>{error.message}</Error>}
    </View>
  )
}