import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Image, Pressable, Button, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert } from 'react-native';



const styles = StyleSheet.create({
  plateau:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00899e",
    maxHeight:250,
    borderRadius:20,
    padding:20,
    minHeight:250,
    margin:10,
    alignSelf:"baseline",
  },
  ViewSpecs:{
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#6db85e",
    maxHeight:50,
    borderRadius:10,
    padding:5,
    minWidth:100,
  },
  ViewSaveurs:{
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#b85e82",
    maxHeight:50,
    borderRadius:10,
    padding:5,
    minWidth:100,
    marginTop:10,
  },
  
  header: {
    marginBottom: 20,
  },
  texte: {
    color:"#ffffff",
  },
  Bouton:{
    backgroundColor:"#654321",
    padding: 10,
    borderRadius: 10,
    color:"#FFFFFF",
  },
  titre:{
    fontSize:30,
    color:"#ffffff",
  },
  titreplateau:{
    fontSize:20,
    fontWeight:"bold",
    color:"#ffffff",
  },
  specs:{
    fontSize:15,
    fontWeight:"bold",
    color:"#000000",
  },

  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: ' #fef9e7', 
  },

  img: {
    flex:1,
    width: 100,
    height: 100,
    paddingTop: 0,
    overflow:"hidden",
    margin:10,
    borderColor:"#000000",
    borderWidth:3,
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
      paddingHorizontal: 12,
      margin:5,
      marginLeft:5,
      marginRight:5,
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
  fontSize: 10,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
nav:{
 margin:10,
 width:350,
 height:10,
 maxHeight:100,
 borderRadius:10,
 padding:10,
 backgroundColor: "#bfbfbf",
 flex:1,
 flexWrap:"wrap",
},
ScrollView:{
  margin:10,
  borderRadius:10,
  padding:10,
  width:400,
  backgroundColor: "#bfbfbf",
  flex:1,
  flexWrap:"wrap",
  flexDirection: 'row',
  //justifyContent: "center",
  //alignItems: "center",
  paddingTop: 50,
 }
});


export default function all() {
  return (

    <SafeAreaView style={ styles.container1 }>
      <View style={styles.nav}>
      <Link href="/index" style= {{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.buttonMarge}>
          <Text style={styles.ButtonText}>Connexion</Text>
        </Pressable>
      </Link>
      <Link href="/NoSSA" style= {{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.buttonMarge}>
          <Text style={styles.ButtonText}>Pas de spring saumon/avocat</Text>
        </Pressable>
      </Link>     
      </View>
      <ScrollView style={styles.ScrollView}>
      <View style={styles.plateau}>
        <Text style={styles.titreplateau}>TastyBlend</Text>
        <Image source={require("../assets/images/Sushi/tasty-blend.jpg")} style={styles.img}></Image>
        <View style={styles.ViewSpecs}>
          <Text style={styles.specs}>- 12 pièces</Text>
          <Text style={styles.specs}>- 12.5€</Text>
        </View>
        <View style={styles.ViewSaveurs}>
          <Text style={styles.specs}>- Saumon</Text>
          <Text style={styles.specs}>- Avocat</Text>
        </View>
      </View>
      <View style={styles.plateau}>
        <Text style={styles.titreplateau}>TastyBlend</Text>
        <Image source={require("../assets/images/Sushi/tasty-blend.jpg")} style={styles.img}></Image>
        <View style={styles.ViewSpecs}>
          <Text style={styles.specs}>- 12 pièces</Text>
          <Text style={styles.specs}>- 12.5€</Text>
        </View>
      </View>
      <View style={styles.plateau}>
        <Text style={styles.titreplateau}>TastyBlend</Text>
        <Image source={require("../assets/images/Sushi/tasty-blend.jpg")} style={styles.img}></Image>
        <View style={styles.ViewSpecs}>
          <Text style={styles.specs}>- 12 pièces</Text>
          <Text style={styles.specs}>- 12.5€</Text>
        </View>
      </View>
      <View style={styles.plateau}>
        <Text style={styles.titreplateau}>TastyBlend</Text>
        <Image source={require("../assets/images/Sushi/tasty-blend.jpg")} style={styles.img}></Image>
        <View style={styles.ViewSpecs}>
          <Text style={styles.specs}>- 12 pièces</Text>
          <Text style={styles.specs}>- 12.5€</Text>
        </View>
      </View>
      <View style={styles.plateau}>
        <Text style={styles.titreplateau}>TastyBlend</Text>
        <Image source={require("../assets/images/Sushi/tasty-blend.jpg")} style={styles.img}></Image>
        <View style={styles.ViewSpecs}>
          <Text style={styles.specs}>- 12 pièces</Text>
          <Text style={styles.specs}>- 12.5€</Text>
        </View>
      </View>
      <View style={styles.plateau}>
        <Text style={styles.titreplateau}>TastyBlend</Text>
        <Image source={require("../assets/images/Sushi/tasty-blend.jpg")} style={styles.img}></Image>
        <View style={styles.ViewSpecs}>
          <Text style={styles.specs}>- 12 pièces</Text>
          <Text style={styles.specs}>- 12.5€</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}