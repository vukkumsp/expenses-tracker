import { CD } from "../components/DayItem";

class Expense {
    id: number;
    name: string;
    description: string;
    amount: number;
    cd: string;
    date: number;
    month: number;
    year: number;

    constructor(
        id: number, name:string, description: string, amount: number, cd: CD, date: number, month: number, year: number,
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
}

export default Expense;