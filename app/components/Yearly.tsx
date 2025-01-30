import { changeDate } from "@/app/store/selectedDateSlice";
import store, { RootState } from "@/app/store/store";
import { LeftArrow, RightArrow } from "@/app/utils/IconComponents";
import { useRouter } from "expo-router";
import { View, StyleSheet, Text, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import Routes from "../utils/Routes";

interface CustomComponentProps {
    year: number;
}

const Yearly: React.FC<CustomComponentProps> = ({year}) => {
    const router = useRouter();

    const today = useSelector((state: RootState) => new Date(state.selectedDate.date));
    const dispatch = useDispatch();

    const increaseYear = () => {
        today.setFullYear(today.getFullYear() + 1);
        store.dispatch(changeDate(today));
    }

    const decreaseYear = () => {
        today.setFullYear(today.getFullYear() - 1);
        store.dispatch(changeDate(today));
    }

    const onPressMonth = (month: number) => {
        let updatedDate = new Date(today.getFullYear(), month, today.getDate());
        store.dispatch(changeDate(updatedDate));
        router.push(Routes.MONTH);
    }

    return (
    <View>
        <View style={styles.header}>
            <Pressable onPress={()=>decreaseYear()} hitSlop={10}>
                <LeftArrow />
            </Pressable>
            <View style={styles.year}>
                <Text style={styles.yearText}>{year}</Text>
            </View>
            <Pressable onPress={increaseYear} hitSlop={10}>
                <RightArrow />
            </Pressable>
        </View>

        <View style={styles.whole}>
            <View>
                <Pressable style={styles.month} onPress={()=>onPressMonth(0)}>
                    <Text style={styles.monthText}>January</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(1)}>
                    <Text style={styles.monthText}>February</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(2)}>
                    <Text style={styles.monthText}>March</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(3)}>
                    <Text style={styles.monthText}>April</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(4)}>
                    <Text style={styles.monthText}>May</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(5)}>
                    <Text style={styles.monthText}>June</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.month} onPress={()=>onPressMonth(6)}>
                    <Text style={styles.monthText}>July</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(7)}>
                    <Text style={styles.monthText}>August</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(8)}>
                    <Text style={styles.monthText}>September</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(9)}>
                    <Text style={styles.monthText}>October</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(10)}>
                    <Text style={styles.monthText}>November</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(11)}>
                    <Text style={styles.monthText}>December</Text>
                </Pressable>
            </View>
        </View>
    </View>
)
}

export default Yearly;

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
    },
    year:{
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    yearText:{
        fontSize: 30,
    },
    whole:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 2,
        paddingLeft: 15,
        paddingRight: 15,
    },
    month:{
        padding: 25,
        // paddingLeft: 35,
        // paddingRight: 35,
        borderWidth: 0,
        borderRadius: 12, 
        // borderColor: 'transparent',
        // backgroundColor: '#f2f2f2',
        marginBottom: 5,
    },
    monthText: {
        fontSize: 25,
        width: 'auto',
        textAlign: 'center'
    }
})