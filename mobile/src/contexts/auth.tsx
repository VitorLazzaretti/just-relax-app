import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../services/api.auth";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
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

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem("@user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@token", response.token);
  }

  async function signOut() {
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.removeItem("@token");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading: loading,
        user: user,
        signIn: signIn,
        signOut: signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};