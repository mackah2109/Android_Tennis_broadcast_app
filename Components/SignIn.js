import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/tennis_girl.jpeg')}
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
        style={styles.gradient}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#A6CE39'}]}
        onPress={()=>{navigation.navigate("Phone")}}>
          <Text style={styles.btnTxt}>SIGN IN WITH PHONE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#3B5998'}]}>
          <Text style={styles.btnTxt}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#000000'}]}>
          <Text style={styles.btnTxt}>SIGN IN WITH APPLE</Text>
        </TouchableOpacity>
        <Text style={{color: '#FFFFFF',top:250}}>By signing up, you agree to the</Text>

        <View style={{ flexDirection: 'row', top: 250 }}>
          <TouchableOpacity style={{borderBottomWidth:1,borderColor:'#FFFFFF'}}>
            <Text style={styles.signTerm}>Terms of Service </Text>
          </TouchableOpacity ><Text style={{color: '#FFFFFF' }}>{" "}&{"  "}</Text>
          <TouchableOpacity style={{borderBottomWidth:1,borderColor:'#FFFFFF'}}>
            <Text style={styles.signTerm}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignIn;

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
  button: {
    height: 50,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#A6CE39',
    justifyContent: 'center',
    top: 250,
    marginBottom: 10,
  },
  btnTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'BrandonText-Regular',
    fontWeight: 'bold',
  },
  signTerm: {
    color: '#FFFFFF',
  },
});
