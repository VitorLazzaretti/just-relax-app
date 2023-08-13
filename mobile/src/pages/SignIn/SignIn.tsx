import React from "react";
import {
  Container,
  Button,
  ContainerImage,
  Title,
  ContainerLogo,
  Description,
  Form,
  ForgotPassword,
  View,
  ButtonText,
  ButtonDescription,
  Highlight,
  Scroll
} from './styles';

import Logo from "../../components/Logo/Logo";
import InitialBackground from "../../components/InitialBackground/InitialBackground";

import { ControlledInput } from '../../components/ControlledInput/ControlledInput';

import { yupResolver } from '@hookform/resolvers/yup';

import { Resolver, useForm } from 'react-hook-form';
import { useAuth } from "../../contexts/auth";
import { useTheme } from "../../contexts/theme";
import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(6, "Password must contain at least 6 characters").required("Password is required"),
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

  const handleNavigation = () => { navigation.navigate("SignUp") };

  return (
    <Container>
      <Scroll bounces={false} snapToEnd={false} snapToStart={false}>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>

        <Title onPress={() => handleToggleTheme()}> Sign In </Title>

        <Description>Sign in now to access your exercises and saved music.</Description>

        <Form>
          <ControlledInput
            name="email"
            control={control}
            placeholder="Email Adress"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />

          <View>
            <ControlledInput
              name="password"
              control={control}
              placeholder="Password"
              secureTextEntry
              error={errors.password}
            />
            <ForgotPassword>Forgot Password?</ForgotPassword>
          </View>
        </Form>

        <Button
          onPress={handleSubmit(handleUserLogin)}
        >
          <ButtonText> LOGIN </ButtonText>
        </Button>

        <ButtonDescription onPress={handleNavigation}>
          Don't have an account?{"  "}
          <Highlight>
            Sign Up
          </Highlight>
        </ButtonDescription>
      </Scroll>

      <ContainerImage>
        <InitialBackground />
      </ContainerImage>
    </Container>
  );
}

export default SignIn;
