import { SQLiteDatabase } from "expo-sqlite";
import { getRowCount } from "./operations";


const testData = (conn: SQLiteDatabase) => {
    let count = getRowCount(conn, "expenses");
    if(count==0){
        try {
            conn.execSync(`
            INSERT INTO expenses (name, description, amount, cd, date, month, year) VALUES
                ('TEST1', 'test desc1', 13, 'CREDIT', 18, 0, 2025);
            `)
            console.log("Row inserted successfully");
          } catch (error) {
            console.error("Error executing statement:", error);
          }
    }
    else {
        console.log("Already data exists in DB");
    }
}

export default testData;