
import ViewScreen from "@/app/components/ViewScreen";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/app/store/store";
import { useRouter } from "expo-router";
import { Calendar } from "react-native-calendars";
import { changeDate } from "@/app/store/selectedDateSlice";
import { LeftArrow, RightArrow } from "@/app/utils/IconComponents";
import Routes from "../utils/Routes";



export default function Month() {
  const router = useRouter();

  /* Redux Store */
  const selectedDay = useSelector((state: RootState) => state.selectedDate.date);
  const dispatch = useDispatch();

  /* Functions */
  const customArrows = (direction:string)=>{
    if(direction==="left")
      return <Text><LeftArrow /></Text>;
    else if(direction==="right")
      return <Text><RightArrow /></Text>
  }
  
  const onTheDayPress = (day:any) => {
    let payload = new Date(
      day.year, day.month-1, day.day
    )
    
    let payloadString = JSON.stringify(payload);
    store.dispatch(changeDate(payloadString));
    router.push(Routes.DAY, day);
  }

  return (
      <ViewScreen header="Monthly" footer='Monthly Total is '>
        <Calendar
          current={selectedDay}
          renderArrow={customArrows}
          onDayPress={onTheDayPress}
        />
      </ViewScreen>);
}