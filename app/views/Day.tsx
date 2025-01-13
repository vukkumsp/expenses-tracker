import ViewScreen from "@/app/components/ViewScreen";
import { Button, FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import DayItem, { CD, Item } from "@/app/components/DayItem";
import ItemModal from "@/app/components/ItemModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { getMonth, getWeekDay, isEqualToDate } from "@/app/utils/DateUtils";
import { AddIcon } from "@/app/utils/IconComponents";

export default function Day() {
  /* Redux Store */
  const selectedDate = useSelector((state: RootState) => state.selectedDate.date);
  const dispatch = useDispatch();

  /* Realm Database */
  // const realm = useRealm();
  // const expenses = useQuery('Expense');
  // const [newExpense, setNewExpense] = useState({description: '', amount: ''});

  // const addExpense = () => {
  //   realm.write(() => {
  //     realm.create('Expense', {
  //       id: Math.random().toString(),
  //       description: newExpense.description,
  //       amount: parseFloat(newExpense.amount),
  //       date: new Date(),
  //     });
  //   });
  //   setNewExpense({description: '', amount: ''});
  // };


  const flatListRef: any = useRef(null);
  const [expList, setExpList] = useState(
    [new Item('1', 'Dummy Item Name', 'Dummy Item Description', CD.CREDIT, 0)]
  );

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [creditOrDebit, setCreditOrDebit] = useState(CD.CREDIT);
  const [expense, setExpense] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const intiateAddItem = () => {
    toggleModal();
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
                new Item(itemName, itemName, itemDescription, CD.DEBIT, expense)
            ]);
      
      setItemName('');//clear state
      setItemDescription('');//clear state
      setExpense(0);
      toggleModal();

      // addExpense();
    }
  }

  
  const scrollToItem = (id: any)=>{
    // To scroll the screen to selected item
    console.log("id:"+id);
    // flatListRef.current.scrollToIndex({id:id, aniamted: true})
  }

  const totalExpenses = () => {
    let sum = 0;
    expList.forEach(item => {
      if(item.cd==CD.CREDIT) sum = sum + item.expense;
      else if(item.cd==CD.DEBIT) sum = sum - item.expense;
    });
    return sum;
  }

  const expensesLabel = () => {
    let today = new Date();

    return (<Text>
      {isEqualToDate(today, selectedDate)?
        "Today's ":
        selectedDate.getDate().toString()+" "
        +getMonth(selectedDate)+" "
        +selectedDate.getFullYear().toString()+" 's "}
      Expenses...
    </Text>);
  }

  return (
    <ViewScreen header="Daily" footer={'Total is '+totalExpenses()} isBackNeeded={true} >
      <FlatList
        ListHeaderComponent={expensesLabel}
        keyboardDismissMode="on-drag"
        ref={flatListRef}
        data={expList}
        // data={expenses.sorted("createdAt")}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DayItem item={item}/>
        )}
      />
      <View style={styles.addButton}>
        <Pressable 
          onPress={intiateAddItem}>
          <AddIcon />
        </Pressable>
      </View>

      {/* <Link style={styles.linkStyle} href="./Month">Month</Link>
      <Link style={styles.linkStyle} href="./settings">Settings</Link>
      <Link style={styles.linkStyle} href="./tracking-views">Views Home</Link> */}

      <ItemModal 
          itemName={itemName} 
          setItemName={setItemName}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription}
          creditOrDebit={creditOrDebit}
          setCreditOrDebit={setCreditOrDebit}
          expense={expense}
          setExpense={setExpense}

          addItem={addItem}
          showModal={isModalVisible}
          toggleShowModal={toggleModal} />
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
  addButton: {
    padding: 10,
    alignSelf: 'flex-end',
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