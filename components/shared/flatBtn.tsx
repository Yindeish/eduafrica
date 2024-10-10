import { flexCenter, h, rounded, wFull } from "@/utils/styles";
import { TextStyle } from "react-native";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "react-native-paper";

import { fs16, fw600 } from "@/utils/fontStyles";


function FlatBtn({ onPress, text, style }: { onPress?: () => void, text: string, style?: { container?: ViewStyle[], text?: TextStyle[] } }) {


    return (
        <TouchableOpacity onPress={onPress} style={[wFull, h(44), rounded(8), flexCenter, { shadowColor: '#1018280D5', shadowRadius: 2 }, style?.container ? style?.container : {}]}>
            <Text style={[fw600, fs16, { fontFamily: '' }, style?.text ? style?.text : {}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default FlatBtn;