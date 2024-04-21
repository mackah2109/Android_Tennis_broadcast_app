import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import SignIn from './Components/SignIn';
import PhoneLogin from './Components/PhoneLogin';
import OtpAuthentication from './Components/OtpAuthentication';
import Profile from './Components/Profile';
import Find from './Components/Find';
import Broadcast from './Components/Broadcast';
import Message from './Components/Message';
import FinalScreen from './Components/FinalScreen';
import ProfileScreen from './Components/ProfileScreen';



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Splash" component={SplashScreen} />
         <Stack.Screen name="Phone" component={PhoneLogin} />
         <Stack.Screen name="OTP" component={OtpAuthentication} />
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="Find" component={Find} /> 
         <Stack.Screen name="Broadcast" component={Broadcast} />
         <Stack.Screen name="Message" component={Message} />
         <Stack.Screen name="Final" component={FinalScreen} />
         <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})