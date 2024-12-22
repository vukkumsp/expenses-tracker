import TopFloater from "@/components/topFloater";
import ViewScreen from "@/components/viewScreen";
import BackButton from "@/components/backButton";
import { Link } from "expo-router";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

// const items = (listOfItems: any[])=>{
//     let list = [];
//     for(let item of listOfItems){
//         list.push(`<li>${item.name}</li>`);
//     }
//     return list;
// }

const items = (listOfItems: any[]) => listOfItems.map(item => (
    <Text key={item.id} style={{ margin: 5 }}>{item.name}</Text>
  ));

export default function Day() {
  const [expList, setExpList] = useState([{ id: 1, name: 'Item 1' }]);

  const addItem = () => {
    setExpList(
        [...expList, 
            { 
                id: expList.length + 1, 
                name: `Item ${expList.length + 1}` 
            }
        ]);
  }

  return (
    <ViewScreen header='Header Content' footer='Footer Content' isBackNeeded={false} >
      <FlatList
        data={expList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ margin: 5 }}>{item.name}</Text>
        )}
      />
      <Button title='Add' onPress={addItem}></Button>
      {/* <TopFloater data={{"key1":"value1"}}/> */}
      <Link style={styles.linkStyle} href="./settings">Settings</Link>
      <Link style={styles.linkStyle} href="./tracking-views">Views Home</Link>
    </ViewScreen>
  );
}

const styles = StyleSheet.create({
  linkStyle:{
    color: 'green'
  },
  scrollContent: {
    flexGrow: 1,
    padding: 10,
    borderWidth: 1,
    width: '100%',
    margin: 0
  },
  footer: {
    height: 60,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    color: '#333',
    fontSize: 16,
  },
});