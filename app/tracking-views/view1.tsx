import { Link } from "expo-router";
import { Text, View } from "react-native";
import ViewScreen from "@/components/ViewScreen";

export default function View1() {
  return (
    <ViewScreen header='View1 Header' footer='View1 Footer'>   
      <Text>View 1</Text>
    </ViewScreen>
  );
}
