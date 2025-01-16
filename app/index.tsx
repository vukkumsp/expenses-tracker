import Day from "@/app/views/Day";
import Month from "./views/Month";
import Year from "./views/Year";
// import db from "./database/db";
import * as SQLite from "expo-sqlite";
import { Text, View } from "react-native";
// import { readAllData } from "./database/operations";

export default function Index() {
  const db = SQLite.openDatabaseSync("test.db");
  // let output = "123";
  
  // db.withTransactionSync(() => {
  //   const result:any = db.getFirstSync('SELECT * FROM expenses');
  //   console.log('Count:', result.rows[0]['COUNT(*)']);
  //   output = result;
  // });

  return (
    // <Year />
    <View>
      <Text>
        {
          JSON.stringify(
            db.getAllSync('SELECT * FROM expenses')
            // readAllData('expenses')
          )
        }
        {/* {output} */}
      </Text>
    </View>
  );
}
