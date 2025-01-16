import SQLite, { SQLiteDatabase } from 'expo-sqlite';

const db: SQLiteDatabase = SQLite.openDatabaseSync("test.db");

export default db;