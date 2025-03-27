import { Image, StyleSheet, View } from "react-native";
import OIcon from '../assets/o.png'
export default function X() {
    return <View>
        <Image style={styles.image} source={OIcon} />
    </View>
}
const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90
    }
})