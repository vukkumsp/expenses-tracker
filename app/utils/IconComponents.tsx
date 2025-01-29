import { Text, View } from "react-native"

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface IconProps {
    size?: number;
    color?: string;
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

export const AddIcon: React.FC<IconProps> = ({size=defaultIconSize, color='black'})  => {
    // (size<0)?size=defaultIconSize:size;
    return <AntDesign name="plus" size={size} color={color} />
}


export const ProfileIcon: React.FC<IconProps> = ({size=defaultIconSize}) => {
    // (size<0)?size=defaultIconSize:size;
    // return <View><Text style={{fontSize: size}}>👤</Text></View>
    // return <AntDesign name="profile" size={defaultIconSize} color="black" />
    if(true) //TODO: Once Sign In and Cloud Sync feature is ready, make this flag false to change the logo
        return <MaterialCommunityIcons name="account-cancel" size={size} color="black" />
    else
        return <MaterialIcons name="person" size={size} color="black" />
}

export const HomeIcon: React.FC<IconProps> = ({size=defaultIconSize})  => {
    // (size<0)?size=defaultIconSize:size;
    // return <View><Text style={{fontSize: size}}>🏠︎</Text></View>
    return <AntDesign name="home" size={size} color="black" />
}

export const EditIcon: React.FC<IconProps> = ({size=defaultIconSize})  => {
    // (size<0)?size=defaultIconSize:size;
    return <MaterialIcons name="edit" size={size} color="black" />
}

export const DeleteIcon: React.FC<IconProps> = ({size=defaultIconSize})  => {
    // (size<0)?size=defaultIconSize:size;
    return <AntDesign name="delete" size={size} color="black" />
}

export const ClearAllIcon: React.FC<IconProps> = ({size=defaultIconSize, color='black'})  => {
    // (size<0)?size=defaultIconSize:size;
    return <MaterialIcons name="clear-all" size={size} color={color} />
}

export const ClearIcon: React.FC<IconProps> = ({size=defaultIconSize, color='black'})  => {
    // (size<0)?size=defaultIconSize:size;
    return <MaterialIcons name="clear" size={size} color={color} />
}