import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CD } from "./DayItem";
import React, { useEffect, useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import Expense from "../database/Expense";
import { AddIcon, ClearAllIcon, ClearIcon } from "../utils/IconComponents";

interface CustomComponentProps {
    // itemName: string;
    // setItemName: any;
    // itemDescription: string;
    // setItemDescription: any;
    // creditOrDebit: CD;
    // setCreditOrDebit: any;

    expense: Expense|null;
    date: Date;
    setExpense: any;

    addExpense: any;
    showModal: boolean;
    toggleShowModal: any;
}

const ExpenseModal: React.FC<CustomComponentProps> = (
    {
    // itemName, setItemName, 
    // itemDescription, setItemDescription,
    // creditOrDebit, setCreditOrDebit,
    expense, date, setExpense,
    addExpense, showModal, toggleShowModal}
) => {

  const [expenseName, setExpenseName] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const radioButtons = useMemo(() => ([
    {
        id: 'CREDIT', // acts as primary key, should be unique and non-empty string
        label: 'Credit',
        value: 'Credit'
    },
    {
        id: 'DEBIT',
        label: 'Debit',
        value: 'Debit'
    }
  ]), []);
  const [expenseCD, setExpenseCD] = useState(CD.CREDIT.toString()); //CREDIT is default value

  useEffect(()=>{
    if(expense==null){
      expense = new Expense(0, expenseName, expenseDescription, expenseAmount, expenseCD, date.getDate(), date.getMonth(), date.getFullYear());
    }
  },[expenseName, expenseDescription, expenseAmount, expenseCD]);

  const fillWithExistingExpense = () => {
    setExpenseName(expense?.name??'');
    setExpenseDescription(expense?.description??'');
    setExpenseCD(expense?.cd??'');
    setExpenseAmount(expense?.amount??'');
  }
  
  const clearAllStates = () => {
    setExpenseName('');
    setExpenseDescription('');
    setExpenseCD('');
    setExpenseAmount('');
  }

    return (
        <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
                onRequestClose={toggleShowModal} // Handles the back button on Android
              >
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Enter Expense Details...</Text>
                    <TextInput 
                      style={styles.modelInput}
                      placeholder="Enter Expense Name"
                      value={expenseName}
                      onChangeText={setExpenseName}
                    />
                    <TextInput 
                      style={styles.modelInput}
                      placeholder="Enter Expense Description"
                      value={expenseDescription}
                      onChangeText={setExpenseDescription}
                      multiline={true}
                    />
                    <View style={styles.modelRadioButtonGroup}>
                      <Text>
                        Select the Expense Type
                      </Text>
                      <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={setExpenseCD}
                        selectedId={expenseCD}
                        layout="row"                
                      />
                    </View>

                    <TextInput 
                      style={styles.modelInput}
                      placeholder="Enter Expense Amount"
                      value={expenseAmount}
                      onChangeText={(text) => {
                        if (/^\d*\.?\d*$/.test(text)) {
                          setExpenseAmount(text);
                        }
                      }}
                      keyboardType="numeric"
                    />
        {/* onPress={()=>{addExpense(expense)}} */}
                    <View style={styles.modelButtonGroup}>
                      <Pressable onPress={()=>{addExpense(expense);clearAllStates();}} style={styles.closeButton}>
                        {/* <Text style={styles.closeButtonText}>Add</Text> */}
                        <AddIcon size={30} color='white'/>
                      </Pressable>
        
                      <Pressable onPress={()=>{toggleShowModal();clearAllStates();}} style={styles.cancelButton}>
                        {/* <Text style={styles.cancelButtonText}>Cancel</Text> */}
                        <ClearIcon size={30} color='white'/>
                      </Pressable>
                
                      <Pressable onPress={clearAllStates} style={styles.clearButton}>
                        {/* <Text style={styles.clearButtonText}>Clear</Text> */}
                        <ClearAllIcon size={30} color='white'/>
                      </Pressable>
                    </View>
        
        
                  </View>
                </View>
              </Modal>
    );
}

export default ExpenseModal;

const styles = StyleSheet.create({

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
        textAlign: 'left'
      },
      modelRadioButtonGroup:{
      },
      modelButtonGroup:{
        // display: 'flex',//flex is by default
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      closeButton: {
        margin: 5,
        backgroundColor: '#4dbd74',
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
        backgroundColor: '#db5e5a',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      cancelButtonText: {
        color: '#fff',
        fontSize: 16,
      },

      clearButton: {
        margin: 5,
        backgroundColor: '#3b3b3b',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      clearButtonText: {
        color: '#fff',
        fontSize: 16,
      },
});