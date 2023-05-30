import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "native-base";
import Home from '../Home/Home'

export default function LandingPage() {
    function  gotoHome(){
        //codigo para ir al home
    }



    return (
      <View style={styles.container}>        
        <Image style={styles.LandingImage} source={require('../../assets/FundacionEducativaSaberes.png')}/>
       
            <Button size="xl" onPress={() => gotoHome()}>Inicio</Button>
       
        <StatusBar style="auto" />
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'strech',
      alignItems: 'center'
    },
    LandingImage:{
        width: '24vw',
        height: 90,
        margin: 7
    }
  });