import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./store/store";

export default function RootLayout() {
  return  (
  <Provider store={store}>
    <Stack screenOptions={{headerShown: false,}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="Profile"/>
      <Stack.Screen name="Day" />
      <Stack.Screen name="Month"/>
      <Stack.Screen name="Year"/>
    </Stack>
  </Provider>);
}
