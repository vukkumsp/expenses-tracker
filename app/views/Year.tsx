import ViewScreen from "@/app/components/ViewScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Yearly from "@/app/components/Yearly";

export default function Year() {
    const today = useSelector((state: RootState) => state.selectedDate.date);
    const dispatch = useDispatch();
    
    return (
        <ViewScreen header="Yearly" footer='Yearly Total is '>
          <Yearly year={today.getFullYear()}/>
        </ViewScreen>);
  }