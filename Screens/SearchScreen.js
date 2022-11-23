import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
function SearchScreen(){
  const axios = require('axios').default;
  const [nombre, setNombre] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [poke, setPoke] = React.useState("");
  const image = {uri: "https://st2.depositphotos.com/3213441/12022/v/950/depositphotos_120226584-stock-illustration-pokemon-go-pokeball-seamless-texture.jpg"};

    function pegarAPI(poke){
        axios
        .get('https://pokeapi.co/api/v2/pokemon/'+poke)
        .then((response) => {
          setNombre(response.data.forms[0].name);
          setImagen(response.data.sprites.front_shiny);
          //console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });
      };
    return(
      <PaperProvider>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.botonera}>
          <TextInput 
            value={poke} 
            onChangeText={(poke) => setPoke(poke)} 
            keyboardType="numeric"></TextInput>
          <Button mode="contained" onPress={()=>pegarAPI(poke)}> Buscar Pokemon </Button>
          <Text style={styles.pokenombre}>{nombre}</Text>
          <Image style={styles.imagen} source={{uri:imagen}}/>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
      </PaperProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    botonera: {
      flex:0.5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:250,
    },
    imagen: {
      width: 200, 
      height: 200,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    pokenombre:{
      backgroundColor: '#BA75F3',
    }
  });
  
  module.exports = SearchScreen;