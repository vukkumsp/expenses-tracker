import { Link, Stack, useNavigation } from "expo-router";
import React from "react";
import { useState } from "react";
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";

export default function RootLayout() {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  return <Stack screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="settings" />
    </Stack>;
}


