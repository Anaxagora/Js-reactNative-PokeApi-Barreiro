import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
function HomeScreen(){
    return(    
    <View style={styles.container}>
        <Text>Bienvenido Entrenador!</Text>
      <StatusBar style="auto" />
    </View>);
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

  module.exports = HomeScreen;