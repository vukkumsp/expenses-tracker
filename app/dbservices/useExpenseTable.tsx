

export enum CD {
    CREDIT="CREDIT", DEBIT="DEBIT"
}

export default function useExpenseTable(){
    let expenseTable: any;
    const addExpense = (
        day: string,
        month: string,
        year: string,
        title: string,
        description: string,
        cd: CD,
        amount: string
    ) => {
        //id has to be auto generated

    }

    const updateExpense = (
        id: string,
        day: string,
        month: string,
        year: string,
        title: string,
        description: string,
        cd: CD,
        amount: string
    ) => {

    }

    const deleteExpenseById = (id: string) => {}
    const deleteExpenseByDay = (day: string) => {}
    const deleteExpenseByMonth = (month: string) => {}
    const deleteExpenseByYear = (year: string) => {}


    return [expenseTable, addExpense, updateExpense];
}