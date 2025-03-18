import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Image, Pressable, Button} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
declare function alert(message?: any): void;


const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignItems:"center",
  },
  titre:{
    fontSize:30,
    color:"black",
    marginBottom:10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    width: 200,
    margin:10,
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    alignContent:"center",
    paddingTop: 50,
    backgroundColor: ' #fef9e7', 
  },
  ButtonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  buttonMarge: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
},


});


export default function Index() {
  const [email, onChangeEmail] = useState('');
  const [motdepasse, onChangeMDP] = useState('');
  return (

    <SafeAreaView style={ styles.container1 }>

      <View style={styles.header}>
        <Text style={ styles.titre}>Vous connecter à SushiFast
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
        />
        
        <TextInput
        style={styles.input}
        onChangeText={onChangeMDP}
        value={motdepasse}
        placeholder="Mot de passe"
        />

        <View>
        <Link href="/all" style= {{ marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.buttonMarge}>
            <Text style={styles.ButtonText}>Connexion</Text>
          </Pressable>
        </Link>
        </View>
        

      </View>
    </SafeAreaView>
  );
}