import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/EvilIcons';

const TennisPal = ({
  name,
  availability,
  skill,
  distance,
  lastActive,
  imageSource,
}) => {
  return (
    <View style={styles.card}>
      <Image
        source={imageSource}
        style={{width: 50, height: 50, borderRadius: 30, marginRight: 20}}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={styles.info}>Availability:</Text>
          <Text> {availability}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={styles.info}>Skill:</Text>
          <Text> NTRP {skill}</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.info1}>{distance} mi away</Text>
          {lastActive === 'Active Now' ? (
            <Text style={[styles.info2, styles.activeNowText]}>Active Now</Text>
          ) : (
            <Text style={styles.info2}>
              Last Active{' '}
              {lastActive === '1 day ago' ? 'Yesterday' : lastActive}
            </Text>
          )}
        </View>
      </View>
      <Icons name="chevron-right" size={30} color="#C4C4C6" />
    </View>
  );
};

const Broadcast = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Icons name="chevron-left" size={50} style={styles.icon} />
        <Image source={require('../Assets/tennis1.png')} style={styles.logo} />
      </View>
      
      <View style={styles.resultsContainer}>
        <TennisPal
          name="Auro Mahaptra"
          availability="Everyday"
          skill="2.0"
          distance="1.38"
          lastActive="34 min ago"
          imageSource={require('../Assets/auro.png')}
        />
        <TennisPal
          name="Manny Perez"
          availability="Everyday"
          skill="4.0"
          distance="1.18"
          lastActive="4 min ago"
          imageSource={require('../Assets/manny.png')}
        />
        <TennisPal
          name="Viorel Sigheartau"
          availability="Tuesday, Friday, Saturday"
          skill="4.0"
          distance="1.91"
          lastActive="Active Now"
          imageSource={require('../Assets/viorel.png')}
        />
        <TennisPal
          name="Chad L"
          availability="Monday, Tuesday, Wednesday..."
          skill="3.0"
          distance="2.42"
          lastActive="14 min ago"
          imageSource={require('../Assets/chad.png')}
        />
        <TennisPal
          name="Sohrab Khalili"
          availability="Everyday"
          skill="2.0"
          distance="2.33"
          lastActive="1 day ago"
          imageSource={require('../Assets/sohrab.png')}
        />
        <TennisPal
          name="Brian M"
          availability="Everyday"
          skill="3.5"
          distance="1.38"
          lastActive="1 day ago"
          imageSource={require('../Assets/brian.png')}
        />
        <View
          style={[
            styles.buttonContainer,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate("Message")}>
            <Text style={styles.nextButtonText}>SEND BROADCAST</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default Broadcast;

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
  resultsContainer: {
    padding: 20,
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    marginRight: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2B4C5A',
  },
  info: {
    fontSize: 12,
    marginBottom: 2,
    color: '#A6CE39',
  },
  info1: {
    fontSize: 12,
    marginBottom: 2,
    color: '#747474',
  },
  info2: {
    fontSize: 12,
    marginBottom: 2,
    color: '#747474',
    fontStyle: 'italic',
    marginRight: -50,
  },
  image: {
    width: 50,
    height: 25,
  },
  buttonContainer: {
    justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#A6CE39',
    padding: 15,
    borderRadius: 10,
    width: '80%',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
