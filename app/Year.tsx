import ViewScreen from "@/app/components/ViewScreen";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/app/store/store";
import Yearly from "@/app/components/Yearly";
import * as SQLite from "expo-sqlite";
import { FLAG, getTotalExpense, readAllData } from "./database/operations";
import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import initializeDatabase from "./database/initializeDatabase";
import testData from "./database/testData";
import { toggle } from "./store/isDataAvailableSlice";

export default function Year() {
    const selectedDate = useSelector((state: RootState) => new Date(state.selectedDate.date));
    // const selectedDate = new Date();
    const isDataAvailable = useSelector((state: RootState) => state.isDataAvailable);
    // const isDataAvailable = false;
    // const dispatch = useDispatch();

    /* SQLite Database */
    const conn = SQLite.openDatabaseSync("test.db");
    // let yearTotal = 0;

    // const [isDataAvailable, setIsDataAvailable] = useState(false);
    // const conn = SQLite.openDatabaseSync("test.db");
  
    // useEffect(()=>{
    //   // clearTable(conn, "expenses");
    //   initializeDatabase(conn);
    //   testData(conn);
    //   store.dispatch(toggle(true));
    //   // setIsDataAvailable(true);
    // });

    let yearTotal = getTotalExpense(conn, selectedDate, FLAG.YEAR);
    // let yearTotal = 0;
    
    return (
        <ViewScreen header="Yearly" footer={'Yearly Total is ₹'+yearTotal}>
          <Yearly year={isDataAvailable?selectedDate.getFullYear():-99}/>
        </ViewScreen>);
  }

