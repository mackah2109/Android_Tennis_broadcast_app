import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Message from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import RangeSlider from './RangeSlider';
import DualRangeSlider from './DualRangeSlider';
import Menu from 'react-native-vector-icons/Entypo';

const UserScreen = () => {};
const ImageScreen = () => {};
const MessageScreen = () => {};
const MapScreen = () => {};
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#2B4C5A',
          height: 70,
        },
      }}
      initialRouteName="Search">
      <Tab.Screen
        name="Image"
        component={ImageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons
              name="image"
              size={18}
              style={{
                color: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Message
              name="message1"
              size={18}
              style={{
                color: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Assets/search1.png')}
              style={{
                width: 22,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons
              name="map-location-dot"
              size={18}
              style={{
                color: 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <User
              name="user-circle"
              size={18}
              style={{
                color: 'white',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const SearchScreen = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const handleValueChange1 = newValue => {
    setValue1(newValue);
  };

  const handleValueChange2 = newValue => {
    setValue2(newValue);
  };

  const [sliderValue, setSliderValue] = useState('0');

  const handleSliderChange = useCallback(value => {
    setSliderValue(value);
  }, []);

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDaySelect = (day) => {
    const updatedDays = [...selectedDays];
    if (updatedDays.includes(day)) {
      updatedDays.splice(updatedDays.indexOf(day), 1); // Remove the day if already selected
    } else {
      updatedDays.push(day); // Add the day if not selected
    }
    setSelectedDays(updatedDays);
  };

  const isDaySelected = (day) => {
    return selectedDays.includes(day);
  };


  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeSelect = (type) => {
    const updatedTypes = [...selectedTypes];
    if (updatedTypes.includes(type)) {
      updatedTypes.splice(updatedTypes.indexOf(type), 1); 
    } else {
      updatedTypes.push(type); 
    }
    setSelectedTypes(updatedTypes);
  };

  const isTypeSelected = (type) => {
    return selectedTypes.includes(type);
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 20, paddingTop: 0}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/search.png')}
            style={{height: 30, width: 27}}
          />
          <Text style={styles.find}>FindPAL Search</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Icons
            name="location-dot"
            size={20}
            color="#2B4C5A"
            position="absolute"
            left={20}
          />
          <TextInput
            placeholder="Current Location"
            placeholderTextColor="#747474"
            style={styles.location}
            paddingLeft={50}
          />
        </View>
        <Text
          style={{
            color: '#2B4C5A',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Search Radius (miles)
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 20,
          }}>
          <RangeSlider
            min={0}
            max={5}
            step={1}
            value={0}
            onValueChange={handleSliderChange}
          />
        </View>

        
        <View
          style={{
            borderWidth: 1,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'right',
            alignSelf: 'right',
            width: 50,
            textAlign: 'center',
            borderColor: '#EBEBEB',
            fontSize: 12,
            marginTop: 20,
          }}>
          <Text>{sliderValue} mi</Text>
        </View>
        

        <View style={styles.gendercontainer}>
          <Text style={{fontSize:12,color:'#747474',marginTop:2}}>Gender</Text>
        <TouchableOpacity
        style={[
          styles.genderButton,
          selectedGender === 'all' && styles.selectedGender,
        ]}
        onPress={() => handleGenderSelect('all')}>
        <Text style={[
          styles.genderButtonText,
          selectedGender === 'all' && styles.selectedGenderText,
        ]}>All</Text>
      </TouchableOpacity>
        <TouchableOpacity
        style={[
          styles.genderButton,
          selectedGender === 'male' && styles.selectedGender,
        ]}
        onPress={() => handleGenderSelect('male')}>
        <Text style={[
          styles.genderButtonText,
          selectedGender === 'male' && styles.selectedGenderText,
        ]}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.genderButton,
          selectedGender === 'female' && styles.selectedGender,
        ]}
        onPress={() => handleGenderSelect('female')}>
        <Text style={[
          styles.genderButtonText,
          selectedGender === 'female' && styles.selectedGenderText,
        ]}>Female</Text>
      </TouchableOpacity>
        </View>

      <View style={styles.daycontainer}>
      <Text style={{ fontSize: 12, color: '#747474', marginTop: 2 }}>Days</Text>

        <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('monday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('monday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('monday') && styles.selectedDayText,
          ]}>Mon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('tuesday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('tuesday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('tuesday') && styles.selectedDayText,
          ]}>Tue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('wednesday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('wednesday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('wednesday') && styles.selectedDayText,
          ]}>Wed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('thursday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('thursday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('thursday') && styles.selectedDayText,
          ]}>Thu</Text>
        </TouchableOpacity>
        
    </View>
    <View style={[styles.daycontainer,{width:'70%',marginLeft:50}]}>
    <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('friday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('friday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('friday') && styles.selectedDayText,
          ]}>Fri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('saturday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('saturday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('saturday') && styles.selectedDayText,
          ]}>Sat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.dayButton,
            isDaySelected('sunday') && styles.selectedDay,
          ]}
          onPress={() => handleDaySelect('sunday')}>
          <Text style={[
            styles.dayButtonText,
            isDaySelected('sunday') && styles.selectedDayText,
          ]}>Fri</Text>
        </TouchableOpacity>
    </View>
    

    <View style={styles.matchcontainer}>
      <Text style={{ fontSize: 12, color: '#747474', marginTop: 2 }}>Match Type</Text>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:15 }}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            isTypeSelected('singles') && styles.selectedType,
          ]}
          onPress={() => handleTypeSelect('singles')}>
          <Text style={[
            styles.typeButtonText,
            isTypeSelected('singles') && styles.selectedTypeText,
          ]}>Singles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            isTypeSelected('doubles') && styles.selectedType,
          ]}
          onPress={() => handleTypeSelect('doubles')}>
          <Text style={[
            styles.typeButtonText,
            isTypeSelected('doubles') && styles.selectedTypeText,
          ]}>Doubles</Text>
        </TouchableOpacity>
        </View>
    </View>

    <View >
    <Text
          style={{
            color: '#2B4C5A',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Skill Level (NTRP)
        </Text>

        <View style={{marginLeft:10,marginTop:10}}>
          <DualRangeSlider /></View>
          <View style={{display:'flex',
            flexDirection:'row', justifyContent: 'space-between',}}>
          <View
          style={{
            borderWidth: 1,
            padding: 2,
            width: 30,height:25,
            textAlign: 'center',
            borderColor: '#EBEBEB',
            fontSize: 12,
            marginTop: 20,
          }}>
          <Text>{sliderValue}</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 2,
            width: 30,height:25,
            textAlign: 'center',
            borderColor: '#EBEBEB',
            fontSize: 12,
            marginTop: 20,
          }}>
          <Text>{sliderValue} </Text>
        </View>
        </View>
    </View>

    <View >
    <Text
          style={{
            color: '#2B4C5A',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Age
        </Text>

        <View style={{marginLeft:10,marginTop:10}}>
          <DualRangeSlider /></View>
          <View style={{display:'flex',
            flexDirection:'row', justifyContent: 'space-between',}}>
          <View
          style={{
            borderWidth: 1,
            padding: 2,
            width: 20,height:25,
            textAlign: 'center',
            borderColor: '#EBEBEB',
            fontSize: 12,
            marginTop: 20,
          }}>
          <Text>{sliderValue}</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 2,
            width: 20,height:25,
            textAlign: 'center',
            borderColor: '#EBEBEB',
            fontSize: 12,
            marginTop: 20,
            
          }}>
          <Text>{sliderValue} </Text>
        </View>
        </View>
    </View>


    <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};


const Find = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#2B4C5A',
          alignItems: 'center',
        }}><Menu name="menu" size={40} style={styles.icon} />
        <Image source={require('../Assets/tennis1.png')} style={styles.image} />
      </View>
      <TabNavigator />
    </View>
  );
};

export default Find;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 50,
    height: 25,
    marginTop:-30
  },
  find: {
    color: '#2B4C5A',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  location: {
    borderWidth: 1,
    borderColor: '#EBEBEB',
    width: '100%',
    borderRadius: 10,
    height: 40,
  },
  gendercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  genderButton: {
    backgroundColor: '#E4F2FF',
    paddingVertical: 5,
    paddingHorizontal:20,
    borderRadius: 5,
  },
  genderButtonText: {
    color: '#6C93A3',
    fontWeight: 'bold',
    fontSize:10
  },
  selectedGender: {
    backgroundColor: '#2B4C5A',
  },
  selectedGenderText:{
    color:'#FFFFFF'
  },
  daycontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dayButton: {
    backgroundColor: '#E4F2FF',
    paddingVertical: 5,
    paddingHorizontal:25,
    borderRadius: 5,
  },
  dayButtonText: {
    color: '#6C93A3',
    fontWeight: 'bold',
    fontSize:10
  },
  selectedDay: {
    backgroundColor: '#2B4C5A',
  },
  selectedDayText:{
    color:'white'
  },
  matchcontainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  typeButton: {
    backgroundColor: '#E4F2FF',
    paddingVertical: 5,
    paddingHorizontal:25,
    borderRadius: 5,
    marginRight:10
  },
  typeButtonText: {
    color: '#6C93A3',
    fontWeight: 'bold',
    fontSize:10
  },
  selectedType: {
    backgroundColor: '#2B4C5A',
  },
  selectedTypeText:{
    color:'white'
  },
  button: {
    backgroundColor: '#A6CE39',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignSelf:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }, icon: {
    color: '#FFFFFF',
    marginLeft: -300,
    marginTop:15
  },
});
