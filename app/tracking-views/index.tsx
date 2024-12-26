import { Link } from "expo-router";
import { Text, View } from "react-native";
import ViewScreen from "@/components/ViewScreen";

export default function Index() {
  return (
    <ViewScreen header='TV Header' footer='TV Footer'>   
      <Text>tracking-views Index</Text>
      <Link href="./tracking-views/view1">View 1</Link>
    </ViewScreen>
  );
}
