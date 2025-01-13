import { Text, View } from "react-native"

interface IconProps {
    size: number;
}

export const LeftArrow = () => {
    return <View><Text>⬅️</Text></View>
}

export const RightArrow = () => {
    return <View><Text>➡️</Text></View>
}

export const BackArrow = () => {
    return <View><Text>🔙</Text></View>
}

export const AddIcon = () => {
    return <View><Text>➕</Text></View>
}


export const ProfileIcon: React.FC<IconProps> = ({size}) => {
    return <View><Text style={{fontSize: size}}>👤</Text></View>
}

export const HomeIcon: React.FC<IconProps> = ({size})  => {
    return <View><Text style={{fontSize: size}}>🏠︎</Text></View>
}