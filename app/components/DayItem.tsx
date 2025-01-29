import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Expense from "../database/Expense";
import { DeleteIcon, EditIcon } from "../utils/IconComponents";

export enum CD {
    CREDIT='CREDIT', DEBIT='DEBIT'
}

export class Item{
    id: string;
    name: string;
    description: string;
    cd: CD; 
    expense: number;

    constructor(id: string, name: string, description: string, cd: CD, expense: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.cd = cd;
        this.expense = expense;
    }
}

interface CustomComponentProps {
    item: Expense;
}

const DayItem: React.FC<CustomComponentProps> = ({item}) => {
    const navigation = useNavigation();
  return (
      <View key={item.id} style={styles.itemView}>
      {/* <View > */}
        <View>
            <Text style={{fontSize: 20}}>
                {item.name}
            </Text>
            <Text style={{fontSize: 15, color: 'gray'}}>
                {item.description}
            </Text>
        </View>
        <View style={styles.amtEditDelete}>
            <Text style={item.cd==CD.CREDIT?styles.creditExpense:styles.debitExpense}>
                {item.cd==CD.CREDIT?'+':'-'}
                {item.amount}
            </Text>
            <Pressable>
                <EditIcon size={30}/>
            </Pressable>
            <Pressable>
                <DeleteIcon size={30}/>
            </Pressable>
        </View>

      </View>

      
    );
}

export default DayItem;

const styles = StyleSheet.create({
    itemView:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 12,
        backgroundColor: '#f2f2f2',
    },
    expense:{
        alignSelf: 'flex-end',
    },
    creditExpense:{
        color: '#33ff66',
        alignSelf: 'flex-end',
        fontSize: 25,
    },
    debitExpense:{
        color: '#fc5353',
        alignSelf: 'flex-end',
        fontSize: 25,
    },
    amtEditDelete: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
});