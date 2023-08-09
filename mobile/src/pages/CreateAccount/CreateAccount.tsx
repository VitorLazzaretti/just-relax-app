import React from "react";
import { Container, Button } from './styles';
import { Resolver, useForm } from 'react-hook-form';

import * as yup from "yup";
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from "../../contexts/auth";
import { Text } from "react-native";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>
  });

  async function handleUserRegister(data: FormData) {
    await signIn();
  }

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        placeholder="Nome"
        error={errors.name}
      />
      <ControlledInput
        name="email"
        control={control}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <ControlledInput
        name="password"
        control={control}
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <ControlledInput
        name="password_confirm"
        control={control}
        placeholder="Confirme a senha"
        secureTextEntry
        error={errors.password_confirm}
      />

      <Button
        onPress={handleSubmit(handleUserRegister)}
      >
        <Text> CADASTRAR </Text>

      </Button>
    </Container>
  );
}

export default SignIn;


type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
  password_confirm: yup.string().oneOf([yup.ref('password'), undefined], 'A senha de confirmação não confere.')
});