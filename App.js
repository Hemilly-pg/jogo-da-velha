import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Placar from './components/Placar';
import JogoDaVelha from './components/JogoDaVelha';

export default function App() {
  return (
    <View style={styles.container}>
      <Placar x={10} o={10} />
      <Text style={styles.text}>Vez: Jogador 1</Text>
      <JogoDaVelha />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0dbdf6',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    color: "#fff",
    fontSize: 30
  }
});
