import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#041a4b"
  },
  texte: {
    color:"#ffffff",
  }
});


export default function Index() {
  return (
    <SafeAreaView style={ styles.container }>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={ styles.texte}>Application
        </Text>
      </View>
      <Image source={require("../assets/images/react-logo.png")}></Image>
      <Link href="../index.tsx" style={ styles.texte}>le lien</Link>
    </SafeAreaView>
  );
}