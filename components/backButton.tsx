import { useNavigation } from "expo-router";
import { Button } from "react-native";

const BackButton = () => {
    const navigation = useNavigation();
  return (
      <Button title="Back" onPress={navigation.goBack}>

      </Button>
    );
}

export default BackButton;