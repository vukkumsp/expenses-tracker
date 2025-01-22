import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./store/store";
import SQLite, { SQLiteProvider } from "expo-sqlite";
import { useEffect } from "react";
import initializeDatabase from "./database/initializeDatabase";
import clearTable from "./database/clearTable";
import testData from "./database/testData";

export default function RootLayout() {
  return  (
    <SQLiteProvider databaseName="test.db" assetSource={{ assetId: require('./../assets/test.db') }}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="Profile" />
          <Stack.Screen name="Day"/>
          <Stack.Screen name="Month" />
          <Stack.Screen name="Year" />
        </Stack>
      </Provider>
    </SQLiteProvider>
  );
}
