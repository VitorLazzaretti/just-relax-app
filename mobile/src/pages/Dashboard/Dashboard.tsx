import React from "react";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth";

export default function Dashboard() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  }

  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}