import { Text, View, Image, Button, Alert, TouchableOpacity, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const Separator = () => <View style={styles.separator} />;

export default function Details({}) {
      const [parcours, setParcours] = useState([
        {name:"Développemet Web et dispositifs interactifs", key: '1'},
        {name:"Stratégie de communication et de design d'expérience", key: '2'},
        {name:'Création numérique', key: '3'},
     ])

     const [poste, setPoste] = useState([
        {name:"Développeur web", key: '1'},
        {name:"Chargé de communication", key: '2'},
        {name:"UX Designer", key: '3'},
        {name:"Web Designer", key: '4'},
        {name:"Développeur mobile", key: '5'},
     ])
      return (
        <SafeAreaView  style={ styles.container1 }>  
         <Separator />
          <Text style={ styles.container4 }>Objectifs de la formation</Text>
          <Separator />

          <Text  style={ styles.container3 }>
          Diplôme professionnel de niveau 6 (bac + 3).{'\n'}{'\n'} 
          le BUT MMI (métiers du multimédia et de l’Internet) dans les domaines suivants : {'\n'} 
          - La conception de sites Internet {'\n'} 
          - à la gestion de communautés{'\n'}
          - Les réseaux sociaux{'\n'}
          - Produits multimédias (jeux vidéo, applications mobiles, etc.) 
          </Text>

          <Separator />
          <Text style={styles.container4}>Parcours du BUT MMI - 2ème année</Text>
          <Separator/>
          <View style={ styles.flat }>
            <FlatList
            data={parcours} 
            renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}                     
            />
            </View>
            <Separator/>
            <View>
    <Text style={styles.container4}>Liste des débouchés</Text>
    </View>
        <Separator />
        <View style={ styles.flat }>
            <FlatList
            data={poste} 
            renderItem={({item}) => <Text style={styles.item1}>{item.name}</Text>}                     
            />
            </View>
            <Separator/><Separator/>
    
        <Link href="/" style={{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.buttonMarge}>
            <Text style={ styles.ButtonText}>Accueil</Text>
        </Pressable>
        </Link>    


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
        paddingTop: 5,
        backgroundColor: 'rgb(247, 235, 195)', 
      },
  
    container2: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: 'rgb(14, 23, 205) ',
        fontWeight: 500,
        backgroundColor: ' #f9e79f' ,
      },
  
      container3: {
        fontSize: 13,
        color: ' #cb4335 ',
        fontWeight: "bold", 
        width: 350,
        borderRadius: 15,
        backgroundColor: 'rgb(162, 213, 234)',
        padding: 10,
      },
  
        container4: {
          fontSize: 13,
          color: 'rgb(253, 245, 129) ',
          fontWeight: "bold", 
          width: 350,
          borderRadius: 15,
          backgroundColor: 'rgb(58, 86, 36)',
          padding: 5
        },

        container5: {
            fontSize: 13,
            color: ' rgb(108, 12, 12)',
            fontWeight: "bold", 
            width: 350,
            borderRadius: 11,
            backgroundColor: 'rgb(105, 203, 53))',
            padding: 10,
        },

      img: {
        width: 150,
        height: 150,
        paddingTop: 0,
    },
  
      separator: {
        marginVertical: 10,
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
  
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 10,
    },
      
    item1: {
        padding: 0,
        marginVertical: 3,
        marginHorizontal: 10,
        fontSize: 15,
    },
    ButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    flat: {
        height: 130,
    }
  })
  