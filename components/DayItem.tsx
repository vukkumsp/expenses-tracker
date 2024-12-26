import { useNavigation } from "expo-router";
import { ReactNode } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface Item{
    name: string;
    id: number;
}

interface CustomComponentProps {
    item: Item;
}

const DayItem: React.FC<CustomComponentProps> = ({item}) => {
    const navigation = useNavigation();
  return (
      <View style={styles.itemView}>
        <Text key={item.id} style={{ margin: 5 }}>{item.name}</Text>
      </View>
      
    );
}

export default DayItem;

const styles = StyleSheet.create({
    itemView:{
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
});