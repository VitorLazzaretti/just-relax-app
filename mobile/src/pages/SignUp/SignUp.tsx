import React from "react";
import {
  Container,
  Button,
  ContainerImage,
  Title,
  ContainerLogo,
  Description,
  Form,
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
  name: string;
  email: string;
  password: string;
}

const schema = yup.object({
  name: yup.string().min(2, "Name must contain at least 2 characters").max(32, "Name must contain less than 32 characters").required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(6, "Password must contain at least 6 characters").required("Password is required"),
});

const SignUp: React.FC = () => {
  const { signIn } = useAuth();
  const { toggleTheme } = useTheme();
  const navigation = useNavigation();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>
  });

  async function handleUserSignUp(data: FormData) {
    await signIn();

    // TODO - Create a function to handle user sign up
  }

  const handleNavigation = () => { navigation.navigate("SignIn") };

  return (
    <Container>
      <Scroll bounces={false} snapToEnd={false} snapToStart={false}>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>

        <Title onPress={() => handleToggleTheme()}> Sign Up </Title>

        <Description>Sign up now and start meditating, exploring and to Just Relax</Description>

        <Form>
          <ControlledInput
            name="name"
            control={control}
            placeholder="Name"
            keyboardType="default"
            autoCapitalize="none"
            error={errors.name}
          />

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
          </View>
        </Form>

        <Button
          onPress={handleSubmit(handleUserSignUp)}
        >
          <ButtonText> SIGNUP </ButtonText>
        </Button>

        <ButtonDescription onPress={handleNavigation} style={{ marginBottom: 40 }}>
          Already have an account?{"  "}
          <Highlight>
            Sign In
          </Highlight>
        </ButtonDescription>
      </Scroll>

      <ContainerImage>
        <InitialBackground />
      </ContainerImage>
    </Container>
  );
}

export default SignUp;
