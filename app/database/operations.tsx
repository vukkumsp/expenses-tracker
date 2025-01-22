import { SQLiteDatabase } from "expo-sqlite";
import Expense from "./Expense";

export const readAllData: (any|Expense[]) = (conn: SQLiteDatabase, tableName: string) => {
    return conn.getAllSync(`SELECT * FROM ${tableName}`);
}

interface RowCount {
    count: number;
}

export const getRowCount: (any|RowCount) = (conn: SQLiteDatabase, tableName: string) => {
    return conn.getFirstSync(`SELECT COUNT(*) AS count FROM ${tableName}`);
}

export enum FLAG {
    YEAR, MONTH, DATE
}

export const getTotalExpense = (conn: SQLiteDatabase, date: Date, flag: FLAG) => {
    let day, month, year, creditSum: (any|null), debitSum: (any|null), result; 
    switch(flag){
        case FLAG.YEAR:
            year = date.getFullYear();
            creditSum = conn.getFirstSync(`SELECT SUM(amount) AS sum FROM expenses WHERE cd='CREDIT' AND year=${year}`);
            debitSum = conn.getFirstSync(`SELECT SUM(amount) AS sum FROM expenses WHERE cd='DEBIT' AND year=${year}`);
            let result = (creditSum.sum??0) - (debitSum.sum??0);
            return result; 
        case FLAG.MONTH: //includes month and year
            month = date.getMonth();
            year = date.getFullYear();
            creditSum = conn.getFirstSync(`SELECT SUM(amount) AS sum FROM expenses WHERE cd='CREDIT' AND year=${year} AND month=${month}`);
            debitSum = conn.getFirstSync(`SELECT SUM(amount) AS sum FROM expenses WHERE cd='DEBIT' AND year=${year} AND month=${month}`);
            result = (creditSum.sum??0) - (debitSum.sum??0);
            return result; 
        case FLAG.DATE: // includes date, month and year
            day = date.getDate();
            month = date.getMonth();
            year = date.getFullYear();
            creditSum = conn.getFirstSync(`SELECT SUM(amount) AS sum FROM expenses WHERE cd='CREDIT' AND year=${year} AND month=${month} AND date=${day}`);
            debitSum = conn.getFirstSync(`SELECT SUM(amount) AS sum FROM expenses WHERE cd='DEBIT' AND year=${year} AND month=${month} AND date=${day}`);
            result = (creditSum.sum??0) - (debitSum.sum??0);
            return result; 
        default:
            return "ERROR";
    }
}

export const readExpensesGivenDate: (any|Expense[]) = (conn: SQLiteDatabase, date: Date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return conn.getAllSync(`SELECT * FROM expenses WHERE year=${year} AND month=${month} AND date=${day}`);
}

export const addExpense = (conn: SQLiteDatabase, newExpense: Expense) => {
    // conn.execSync(`
    //     INSERT INTO expenses (name, description, amount, cd, date, month, year) VALUES
    //         ('TEST1', 'test desc1', 13, 'CREDIT', 18, 0, 2025);
    //     `)
    conn.execSync(`
        INSERT INTO expenses (
            name,
            description,
            amount,
            cd,
            date,
            month,
            year
        ) VALUES (
            '${newExpense.name}',
            '${newExpense.description}',
            ${newExpense.amount},
            '${newExpense.cd}',
            ${newExpense.date},
            ${newExpense.month},
            ${newExpense.year}
         )`);
};