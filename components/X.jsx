import { Image, StyleSheet, View } from "react-native";
import XIcon from '../assets/x.png'
export default function X() {
    return <View>
        <Image style={styles.image} source={XIcon} />
    </View>
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})