import { Text, View, Image, Button, Alert, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

export default function Index({}) {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView  style={ styles.container1 }>  
      <Image source={require("../assets/images/react-logo.png")} style={styles.img}></Image>
      <Separator /><Separator />
      <Text  style={ styles.container2 }>Présentation du BUT MMI</Text>
      <Separator />
      <Text  style={ styles.container3 }>Durée la formation : 3 ans</Text>
      <Separator />
      <Text  numberOfLines={5} style={styles.container3 }>Nature de la formation :{"\n"}{"\n"}
        Diplôme conférant le grade de licence{"\n"}{"\n"}
        Diplôme d'Etat - Diplôme national{"\n"}
      </Text>
      <Separator />
      <Text  style={ styles.container4 }>Type de formation : BUT (Bachelor Universitaire de Technologie)</Text>
      <Separator /><Separator />
    <View>
    <Link href="/details" style= {{ marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.buttonMarge}>
        <Text style={styles.ButtonText}>Plus de détails</Text>
      </Pressable>
    </Link>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    container1: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
      backgroundColor: ' #fef9e7', 
    },

  container2: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 25,
      color: 'rgb(14, 23, 205) ',
      fontWeight: 500,
      backgroundColor: '#f9e79f' ,
    },

    container3: {
      fontSize: 15,
      color: ' #cb4335 ',
      fontWeight: "bold", 
      width: 350,
      borderRadius: 15,
      backgroundColor: 'rgb(162, 213, 234)',
      padding: 10,
    },

      container4: {
        fontSize: 11,
        color: ' #cb4335 ',
        fontWeight: "bold", 
        width: 350,
        borderRadius: 15,
        backgroundColor: 'rgb(131, 144, 120)',
        padding: 10,

    },
    img: {
      width: 150,
      height: 150,
      paddingTop: 0,
  },

    separator: {
      marginVertical: 15,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },

    buttonMarge: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },

    bouton: {
        alignItems: 'center',
        backgroundColor: 'rgb(94, 35, 117)',
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 15,
        width: 170,
    },
    
  ButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

