import { Text, View } from "react-native"

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface IconProps {
    size: number;
}

const defaultIconSize = 48;

export const LeftArrow = () => {
    // return <View><Text>⬅️</Text></View>
    return <AntDesign name="arrowleft" size={defaultIconSize} color="black" />
}

export const RightArrow = () => {
    // return <View><Text>➡️</Text></View>
    return <AntDesign name="arrowright" size={defaultIconSize} color="black" />
}

export const BackArrow = () => {
    // return <View><Text>🔙</Text></View>
    return <AntDesign name="back" size={defaultIconSize} color="black" />
}

export const AddIcon = () => {
    // return <View><Text>➕</Text></View>
    // return <MaterialIcons name="add-circle-outline" size={24} color="black" />
    return <AntDesign name="plus" size={defaultIconSize} color="black" />
}


export const ProfileIcon: React.FC<IconProps> = ({size}) => {
    (size<0)?size=defaultIconSize:size;
    // return <View><Text style={{fontSize: size}}>👤</Text></View>
    // return <AntDesign name="profile" size={defaultIconSize} color="black" />
    if(true) //TODO: Once Sign In and Cloud Sync feature is ready, make this flag false to change the logo
        return <MaterialCommunityIcons name="account-cancel" size={size} color="black" />
    else
        return <MaterialIcons name="person" size={size} color="black" />
}

export const HomeIcon: React.FC<IconProps> = ({size})  => {
    (size<0)?size=defaultIconSize:size;
    // return <View><Text style={{fontSize: size}}>🏠︎</Text></View>
    return <AntDesign name="home" size={size} color="black" />
}