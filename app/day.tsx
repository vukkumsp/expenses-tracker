import ViewScreen from "@/components/ViewScreen";
import { Link } from "expo-router";
import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import DayItem from "@/components/DayItem";

const items = (listOfItems: any[]) => listOfItems.map(item => (
    <DayItem item={item}/>
  ));
  
const ListSeparator = ()=>(<Text>-------</Text>);
const ListHeader = ()=>(<Text>Items Heading</Text>);
const ListFooter = ()=>(<Text>Items Footer</Text>)

export default function Day() {
  const flatListRef: any = useRef(null);
  const [expList, setExpList] = useState([{ id: '1', name: 'Item 1' }]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const intiateAddItem = () => {
    toggleModal();
    // addItem();
    
  }

  //when new item added, its state updated in async
  useEffect(()=>{
    // highlight the newly added item by ..
    // ..  scrolling it to top of screen
    scrollToItem(expList.length);
  },[expList]);

  const addItem = () => {
    if(itemName && itemName.length>0 
        && itemDescription && itemDescription.length>0){
          setExpList(
            [...expList, 
                { 
                    id: itemName, 
                    name: itemDescription 
                }
            ]);
      setItemName('');//clear state
      setItemDescription('');//clear state
      toggleModal();
    }
  }

  
  const scrollToItem = (id: any)=>{
    // To scroll the screen to selected item
    console.log("id:"+id);
    // flatListRef.current.scrollToIndex({id:id, aniamted: true})
  }

  return (
    <ViewScreen header='Header Content' footer='Footer Content' isBackNeeded={false} >
      <FlatList
        keyboardDismissMode="on-drag"
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ItemSeparatorComponent={ListSeparator}
        ref={flatListRef}
        data={expList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DayItem item={item}/>
        )}
      />
      <Button title='Add' onPress={intiateAddItem}></Button>
      <Link style={styles.linkStyle} href="./settings">Settings</Link>
      <Link style={styles.linkStyle} href="./tracking-views">Views Home</Link>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal} // Handles the back button on Android
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enter Item Details...</Text>
            <TextInput 
              style={styles.modelInput}
              placeholder="Enter Item Name"
              value={itemName}
              onChangeText={setItemName}
            />
            <TextInput 
              style={styles.modelInput}
              placeholder="Enter Description"
              value={itemDescription}
              onChangeText={setItemDescription}
              multiline={true}
            />

            <View style={styles.modelButtonGroup}>
              <TouchableOpacity onPress={addItem} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>


          </View>
        </View>
      </Modal>
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },

  modelInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius:5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    margin: 5,
    width: '100%',
    textAlign: 'center'
  },

  modelButtonGroup:{
    // display: 'flex',//flex is by default
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  closeButton: {
    margin: 5,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  cancelButton: {
    margin: 5,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});