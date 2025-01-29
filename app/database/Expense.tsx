import { CD } from "../components/DayItem";

class Expense {
    id: number;
    name: string;
    description: string;
    amount: string;
    cd: string;
    date: number;
    month: number;
    year: number;

    constructor(
        id: number, name:string, description: string, amount: string, cd: string, date: number, month: number, year: number,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.cd = cd;
        this.date = date;
        this.month = month;
        this.year = year;
    }

    isValid(){
        if(this.name && this.name.length > 0 &&
           this.description && this.description.length > 0 && 
           this.amount && this.amount.length > 0){
            return true;
        }
        return false;
    }

    clear(){
        this.name = '';
        this.description = '';
        this.amount = '';
    }
}

export default Expense;