import { Button, StyleSheet, Text, View } from "react-native"
import { ProfileIcon } from "@/app/utils/IconComponents";
import HomeButton from "@/app/components/HomeButton";
import ViewScreen from "@/app/components/ViewScreen";

const Profile = () => {
    return (<ViewScreen header="Profile" footer={<HomeButton />}>
        <View style={styles.whole}>
                <ProfileIcon size={100}/>
                <Text style={{fontSize:50}}>
                    Guest
                </Text>
                <Button title="Sign In with Google">
                </Button>
                <Text>Sign In with Google to Sync with GDrive</Text>
            </View>
        </ViewScreen>);


}

export default Profile;

const styles = StyleSheet.create({
    whole: {
        alignItems: 'center',
    }
})