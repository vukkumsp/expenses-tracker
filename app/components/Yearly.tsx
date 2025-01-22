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
            <Pressable onPress={()=>decreaseYear()}>
                <LeftArrow />
            </Pressable>
            <View style={styles.year}>
                <Text>{year}</Text>
            </View>
            <Pressable onPress={increaseYear}>
                <RightArrow />
            </Pressable>
        </View>

        <View style={styles.whole}>
            <View>
                <Pressable style={styles.month} onPress={()=>onPressMonth(0)}>
                    <Text>January</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(1)}>
                    <Text>February</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(2)}>
                    <Text>March</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(3)}>
                    <Text>April</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(4)}>
                    <Text>May</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(5)}>
                    <Text>June</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.month} onPress={()=>onPressMonth(6)}>
                    <Text>July</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(7)}>
                    <Text>August</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(8)}>
                    <Text>September</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(9)}>
                    <Text>October</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(10)}>
                    <Text>November</Text>
                </Pressable>
                <Pressable style={styles.month} onPress={()=>onPressMonth(11)}>
                    <Text>December</Text>
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
        justifyContent: 'space-around',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    year:{
        width: '80%',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    whole:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    month:{
        padding: 10,
        // paddingRight: 40,
        // paddingLeft: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginBottom: 5,
    },
})