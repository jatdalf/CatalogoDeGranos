import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FundacionSaberesImage from '../../assets/FundacionEducativaSaberes.png'

export default function LandingPage() {
    return (
      <View style={styles.container}>
        <Text>Landing page</Text>
        <Image
          style={styles.LandingImage}
          source={require('../../assets/FundacionEducativaSaberes.png')}
        />
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