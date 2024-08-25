import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../services/api.auth";
import { User } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signUp(email: string, password: string, name: string): Promise<void>;
  signOut(): Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        setLoading(true);
        const storedUser = await AsyncStorage.getItem("@user");
        const storedToken = await AsyncStorage.getItem("@token");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser) as User);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await auth.signIn(email, password);

    setUser(response.user);

    await AsyncStorage.setItem("@user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@token", response.token);
  }

  async function signUp(email: string, password: string, name: string) {
    const response = await auth.signUp(email, password);

    setUser(response.user);

    await AsyncStorage.setItem("@name", name);
    await AsyncStorage.setItem("@user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@token", response.token);
  }

  async function signOut() {
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.removeItem("@token");

    await auth.signOut();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading: loading,
        user: user,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};