import { SQLiteDatabase } from "expo-sqlite";
import { getRowCount } from "./operations";


const clearTable = (conn: SQLiteDatabase, tableName: string) => {
    if(getRowCount(conn, tableName).count===0){
        conn.execSync(`DROP TABLE ${tableName}`);
        return true;
    }
    return false;
}

export default clearTable;