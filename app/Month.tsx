
import ViewScreen from "@/app/components/ViewScreen";
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/app/store/store";
import { useRouter } from "expo-router";
import { Calendar } from "react-native-calendars";
import { changeDate } from "@/app/store/selectedDateSlice";
import { LeftArrow, RightArrow } from "@/app/utils/IconComponents";
import * as SQLite from "expo-sqlite";
import { FLAG, getTotalExpense } from "./database/operations";
import { useState } from "react";


export default function Month() {
  const router = useRouter();

  /* Redux Store */
  const selectedDate = useSelector((state: RootState) => new Date(state.selectedDate.date));
  const dispatch = useDispatch();

  /* SQLite Database */
  const conn = SQLite.openDatabaseSync("test.db");

  /* Functions */
  const customArrows = (direction:string)=>{
    if(direction==="left")
      return <Text><LeftArrow /></Text>;
    else if(direction==="right")
      return <Text><RightArrow /></Text>
  }
  
  const onTheDayPress = (day:any) => {
    // let payload = new Date(
    //   day.year, day.month-1, day.day
    // )
    selectedDate.setDate(day.day);
    selectedDate.setMonth(day.month-1);
    selectedDate.setFullYear(day.year);

    store.dispatch(changeDate(selectedDate));
    router.push("./Day", day);
  }

  const handleMonthChange = (monthObject: any) => {
    const { month, year } = monthObject;

    selectedDate.setMonth(month-1);
    selectedDate.setFullYear(year);

    dispatch(changeDate(selectedDate));
  };

  let monthTotal = getTotalExpense(conn, selectedDate, FLAG.MONTH);

  return (
      <ViewScreen header="Monthly" footer={'Monthly Total is ₹'+monthTotal}>
        <Calendar
          theme={{
            textMonthFontSize: 30,  // Adjust font size of month title
            // textMonthFontWeight: 'bold', // (Optional) Make it bold
            // monthTextColor: 'blue', // (Optional) Change color
          }}
          current={selectedDate.toDateString()}
          renderArrow={customArrows}
          onDayPress={onTheDayPress}
          onMonthChange={handleMonthChange}
        />
      </ViewScreen>);
}

const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      color: 'red'
    },
})