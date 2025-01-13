import { BackArrow } from "@/app/utils/IconComponents";
import { useNavigation } from "expo-router";
import { Pressable } from "react-native";

const BackButton = () => {
    const navigation = useNavigation();
  return (
      <Pressable onPress={navigation.goBack}>
        <BackArrow />
      </Pressable>
    );
}

export default BackButton;