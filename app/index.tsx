import Day from "@/app/Day";
import Month from "./Month";
import Year from "./Year";
// import db from "./database/db";
import * as SQLite from "expo-sqlite";
import { Text, View } from "react-native";
import testData from "./database/testData";
import { useEffect, useState } from "react";
import clearTable from "./database/clearTable";
import initializeDatabase from "./database/initializeDatabase";
import { getRowCount, readAllData } from "./database/operations";
import { toggle } from "./store/isDataAvailableSlice";
import store, { RootState } from "./store/store";
import { useSelector } from "react-redux";
// import { readAllData } from "./database/operations";

export default function Index() {
  // const [isDataAvailable, setIsDataAvailable] = useState(false);
  
  const conn = SQLite.openDatabaseSync("test.db");

  const isDataAvailable = useSelector((state: RootState) => state.isDataAvailable);

  useEffect(()=>{
    // clearTable(conn, "expenses");
    initializeDatabase(conn);
    // testData(conn);
    // setIsDataAvailable(true);
    store.dispatch(toggle(true));
  },[]);
  // initializeDatabase(conn);
  // store.dispatch(toggle(true));
  return (
    
    <Year />
    // <View>
    //   <Text>
    //     { 
    //       JSON.stringify(
    //         isDataAvailable?getRowCount(conn, 'expenses'):{"test":"value"}
    //       )
    //     }
    //   </Text>
    // </View>
  );
}
