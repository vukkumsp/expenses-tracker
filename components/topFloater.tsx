import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TopFloater(props: any) {
  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        zIndex: -1,
        borderColor: 'black',
        borderWidth: 1,
        shadowOpacity: 100,
        shadowColor: 'green',
        backgroundColor: 'white'
      }}
    >
      <Text>{JSON.stringify(props.data)}</Text>

    </View>
  );
}
