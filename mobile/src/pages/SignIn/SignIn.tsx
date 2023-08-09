import React from "react";
import { Text } from "react-native";
import { Container, Button } from './styles';
import { Resolver, useForm } from 'react-hook-form';

import * as yup from "yup";
import { ControlledInput } from '../../components/ControlledInput/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from "../../contexts/auth";
import { useTheme } from "../../contexts/theme";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { toggleTheme } = useTheme();
  const navigation = useNavigation();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>
  });

  async function handleUserLogin(data: FormData) {
    await signIn();
  }

  return (
    <Container>
      <Text onPress={() => handleToggleTheme()} style={{ margin: 10, fontSize: 24 }}> SignIn </Text>
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

      <Button
        onPress={handleSubmit(handleUserLogin)}
      >
        <Text> LOGAR </Text>
      </Button>

      <Text onPress={() => { navigation.navigate("CreateAccount") }} style={{ margin: 10, fontSize: 24 }}> IR para Cadastrar-se </Text>
    </Container>
  );
}

export default SignIn;
