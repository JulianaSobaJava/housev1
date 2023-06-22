import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {

  const myImage = require('./assets/mainImage.png')
  const myLogo = require('./assets/logo.png')
  return (
    <View style={styles.container}>
      <Image source={myLogo} style={styles.logo}/>
      <Image source={myImage} style={styles.image}/>
      <Text style={styles.text}>All the recipes {'\n'} on your fingertips</Text>
      <Text style={styles.smtext}>Cooking on Thermomix made easy</Text>
      <Button title='Let start' color='#fff'/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  },
  image:{
  },
  text:{
    fontWeight: '600',
    fontSize:30,
    lineHeight:35,
    marginTop:20,
    textAlign:'center',
    color:'#1C0F13',
  },
  smtext:{
fontWeight: '400',
fontSize: 12,
lineHeight: 23,
alignItems: 'center',
textAlign: 'center',
color: 'rgba(28, 15, 19, 0.9)',
  },
  logo:{
    position: 'absolute',
    top: 60,
  }
});
