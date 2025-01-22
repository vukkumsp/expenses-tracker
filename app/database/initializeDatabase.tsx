import { SQLiteDatabase } from "expo-sqlite";

const initializeDatabase = (conn: SQLiteDatabase) => {
    conn.execSync(`
        CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            amount REAL NOT NULL,
            cd TEXT NOT NULL,
            date TEXT NOT NULL,
            month TEXT NOT NULL,
            year TEXT NOT NULL
        )    
    `);
};

export default initializeDatabase;