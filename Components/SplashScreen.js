import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/splash.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Image
        source={require('../Assets/splashScreenDownimg.png')}
        style={styles.foregroundImage}
      />
      
      <LinearGradient
        colors={['#2B4C5A00', '#2B4C5A']}
        locations={[0, 1]}
        style={styles.gradient}
      >      
       <Image
        source={require('../Assets/tennis1.png')}  style={{width:150,height:80,bottom:270,right:75}}
      />
      <TouchableOpacity style={styles.started}
      onPress={()=>{navigation.navigate("SignIn")}}>
        <Text style={styles.startedTxt}>GET STARTED</Text>
      </TouchableOpacity>
      </LinearGradient>
      
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  foregroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  started: {
    height: 50,
    width: 230,
    borderRadius: 10,
    backgroundColor: '#A6CE39',
    justifyContent: 'center',
    top:250,
    right:35
  },
  startedTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'BrandonText-Regular',
    fontWeight:'bold'
  },
});
