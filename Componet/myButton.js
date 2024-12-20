import { Button,TouchableOpacity,Text,View } from "react-native";
import { styles } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function DefaultButton({textButton}){
    return(
        <Button style={styles.DefaultButton}>{textButton}</Button>
    )
}

export function IconButton({IconColor}){
    return(
        <TouchableOpacity>
            <View style={styles.IconButton}>
                <Ionicons name="chevron-down" size={24} color="{IconColor}"/>
            </View>
        </TouchableOpacity>
    )
}

export function Button_Icon({text}){
    return(
        <TouchableOpacity>
            <View style={styles.Button_Icon}>
                <MaterialCommunityIcons name="trophy-award" size={20} color="#FAAD14" />
                <Text style={{color: "#FAAD14", fontSize: 14, fontWeight: "bold"}}>ชนะ (0/2)</Text>
            </View>
        </TouchableOpacity>
    )
}

export function PrimaryButton(props){
    return(
        <TouchableOpacity>
            <View style={styles.PrimaryButton}>
                <Text style={{color:"#fff",fontSize: 16, fontWeight: "bold"}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}