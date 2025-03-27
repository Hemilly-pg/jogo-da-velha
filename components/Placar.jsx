import { Image, StyleSheet, Text, View } from "react-native";
import X from './X';
import O from './O';

export default function Placar({ x, o }) {
    return <View style={styles.placar}>
        <View style={styles.pontos}>
            <X />
            <Text style={styles.text}>{x}</Text>
        </View>
        <View style={styles.pontos}>
            <O />
            <Text style={styles.text}>{o}</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    placar: {
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        padding: 10,
        gap: 30,
    },
    pontos: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 50
    }
})