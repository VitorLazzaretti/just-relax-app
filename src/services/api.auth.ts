import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../config/firebase";

interface Response {
  token: string;
  user: User;
  refreshToken: string;
}

export async function signIn(email: string, password: string): Promise<Response> {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();

    return {
      token: token,
      user: user,
      refreshToken: user.refreshToken
    };
  } catch (error) {
    throw new Error(error);
  }
}

export async function signOut() {
  await auth.signOut();
}

export async function signUp(email: string, password: string): Promise<Response> {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();

    return {
      token: token,
      user: user,
      refreshToken: user.refreshToken
    };
  } catch (error) {
    throw new Error(error);
  }
}