import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/EvilIcons';



const FinalScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icons name="chevron-left" size={50} style={styles.icon} />
        <Image source={require('../Assets/tennis1.png')} style={styles.logo} />
      </View>

      <View style={{padding: 20}}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginBottom: 10,
            padding: 15,
            elevation: 3,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('../Assets/auro.png')}
              style={{width: 70, height: 70, borderRadius: 40}}
            />
            <View style={{marginLeft: 20}}>
              <Text
                style={{fontSize: 18, color: '#2B4C5A', fontWeight: 'bold'}}>
                Auro Mahaptra
              </Text>
              <Text style={{fontSize: 12, color: '#2B4C5A'}}>
                @tennispalusername
              </Text>
              <Text style={{fontSize: 12, color: '#747474'}}>
                Sent 18 hours ago
              </Text>
              <Text style={{fontSize: 12, color: '#747474'}}>
                Last active 2 days ago
              </Text>
            </View>
            <Icons
              name="chevron-right"
              size={35}
              style={{marginLeft: 80, marginTop: 20}}
            />
          </View>
          <View style={{marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,
        padding:0,paddingBottom:10,borderColor:'#EBEBEB'}}>
            <View style={{alignItems:'center',alignSelf:'center'}}>
                <Text style={{color:'#2B4C5A',fontSize:18,fontWeight:'bold'}}>4.5</Text>
                <Text style={{color:'#747474',fontSize:12}}>NTRP</Text>
            </View>
            <View>
                <Text style={{color:'#2B4C5A',fontSize:18,fontWeight:'bold'}}>Male</Text>
                <Text style={{color:'#747474',fontSize:12}}>Gender</Text>
            </View>
            <View>
                <Text style={{color:'#2B4C5A',fontSize:18,fontWeight:'bold',marginLeft:12}}>35</Text>
                <Text style={{color:'#747474',fontSize:12}}>Years Old</Text>
            </View>
            <View>
                <Text style={{color:'#2B4C5A',fontSize:18,fontWeight:'bold',marginLeft:20}}>{'<'}5</Text>
                <Text style={{color:'#747474',fontSize:12}}>Miles Away</Text>
            </View>
            <View>
                <Text style={{color:'#2B4C5A',fontSize:18,fontWeight:'bold',marginLeft:10}}>3.5k</Text>
                <Text style={{color:'#747474',fontSize:12}}>Followers</Text>
            </View>
          </View>

          <Text style={{fontSize:18,color:'#4B4B4B',marginTop:10,marginBottom:20}}>Anyone available to play at Mcgrady park tuesday around 6pm? I’ll be there until 8 on court fifteen</Text>
          
        
        
        </View>
        <View
            style={[
              styles.buttonContainer,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <TouchableOpacity
              style={styles.nextButton}>
              <Text style={styles.nextButtonText}>CHAT NOW</Text>
            </TouchableOpacity>
            <Text style={{marginTop:10,marginBottom:10}}>QUICK REPLIES</Text>
            <TouchableOpacity
              style={[styles.nextButton,{backgroundColor:'#2B4C5A'}]}>
              <Text style={styles.nextButtonText}>LET'S PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton,{marginTop:10,backgroundColor:'#2B4C5A'}]}>
              <Text style={styles.nextButtonText}>SORRY I'M NOT AVAILABLE</Text>
            </TouchableOpacity>
          </View>
      </View>

      
    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#2B4C5A',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 25,
    marginLeft: 120,
    marginRight: 'auto',
  },
  icon: {
    color: '#FFFFFF',
    marginTop: -10,
  },
  buttonContainer: {
    marginTop:180
  },
  nextButton: {
    backgroundColor: '#A6CE39',
    padding: 15,
    borderRadius: 10,
    width: '80%',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold'
  },
});
