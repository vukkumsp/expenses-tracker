import { useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

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
    item: Item;
}

const DayItem: React.FC<CustomComponentProps> = ({item}) => {
    const navigation = useNavigation();
  return (
      <View key={item.id} style={styles.itemView}>
        <View>
            <Text>
                {item.name}
            </Text>
            <Text style={{fontSize: 10, color: 'gray'}}>
                {item.description}
            </Text>
        </View>
        <Text style={item.cd==CD.CREDIT?styles.creditExpense:styles.debitExpense}>
            {item.cd==CD.CREDIT?'+':'-'}
            {item.expense}
        </Text>
      </View>
      
    );
}

export default DayItem;

const styles = StyleSheet.create({
    itemView:{
        display: 'flex',
        flexDirection: 'row',
        
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    expense:{
        alignSelf: 'flex-end',
    },
    creditExpense:{
        color: 'green',
        alignSelf: 'flex-end',
    },
    debitExpense:{
        color: 'red',
        alignSelf: 'flex-end',
    }
});