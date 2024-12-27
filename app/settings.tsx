import ViewScreen from "@/components/ViewScreen";
import { Link } from "expo-router";
import { SectionList, Text, View } from "react-native";
import BackButton from "@/components/BackButton";
import DayItem from "@/components/DayItem";

export default function Settings() {
  const settingsSections = ["General"]
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  
  return (
    <ViewScreen header='Settings Header' footer='Settings Footer'>
      
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={DATA}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
         />

    </ViewScreen>
  );
}
