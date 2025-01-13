import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CD } from "./DayItem";

interface CustomComponentProps {
    itemName: string;
    setItemName: any;
    itemDescription: string;
    setItemDescription: any;
    creditOrDebit: CD;
    setCreditOrDebit: any;
    expense: number;
    setExpense: any;

    addItem: any;
    showModal: boolean;
    toggleShowModal: any;
}

const ItemModal: React.FC<CustomComponentProps> = (
    {itemName, setItemName, 
    itemDescription, setItemDescription,
    creditOrDebit, setCreditOrDebit,
    expense, setExpense,
    addItem, 
    showModal, toggleShowModal}
) => {

    return (
        <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
                onRequestClose={toggleShowModal} // Handles the back button on Android
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
                    <TextInput 
                      style={styles.modelInput}
                      placeholder="Enter expense amount"
                      value={expense.toString()}
                      onChangeText={setExpense}
                    />
        
                    <View style={styles.modelButtonGroup}>
                      <Pressable onPress={addItem} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Add</Text>
                      </Pressable>
        
                      <Pressable onPress={toggleShowModal} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                      </Pressable>
                    </View>
        
        
                  </View>
                </View>
              </Modal>
    );
}

export default ItemModal;

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