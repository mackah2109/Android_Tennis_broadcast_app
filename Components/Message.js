import React, {useState} from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/EvilIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MegaIcon from 'react-native-vector-icons/Ionicons';
import Pen from 'react-native-vector-icons/Octicons';
import Icons1 from 'react-native-vector-icons/FontAwesome6';
import Message1 from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import SwipeButton from 'rn-swipe-button'


const BroadcastForm = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [time,setTime]=useState([
    {id:1 , name:"1 hour"},{
      id:2, name: "2 hours"
    }
  ])
  const [selectedTime,setSelectedTime]=useState('Select');

  const [text, setText] = useState('SLIDE TO SEND');
  const handleSwipeSuccess = () => {
    onSwipeSuccess();
    setText('SWIPED!');
  };
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#EBEBEB',
            }}>
            <MegaIcon name="megaphone-outline" size={30} color="#2B4C5A" />
            <Text
              style={{
                fontSize: 20,
                color: '#2B4C5A',
                fontWeight: 'bold',
                marginLeft: 20,
              }}>
              Create broadcast
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: -60,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../Assets/vibration1.png')}
              style={{width: 300, height: 300, marginLeft: 25}}
            />
            <Image
              source={require('../Assets/auro.png')}
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                borderRadius: 30,
                marginLeft: 151,
              }}
            />
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              marginTop: -60,
              display: 'flex',
              flexDirection: 'row',
              
            }}>
            <Text style={{color:'#2B4C5A'}}>Reaching 1,200 people </Text>
            <Text style={{color:'#2B4C5A'}}> Notice for 48-hours</Text>
          </View>
        </View>

        <View
          style={{
            borderColor: '#B0B0B0',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            marginBottom: 10,
          }}>
          <Text style={{color: '#747474', fontSize: 14}}>Duration</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18,color:'#2B4C5A'}}>{selectedTime}</Text>
            <TouchableOpacity
              onPress={() => {
                setOpenDropdown(!openDropdown);
              }}>
              <Icons name="chevron-down" size={50} marginTop={-10} style={{
          transform: [{ rotate: openDropdown ? '180deg' : '0deg' }],
        }}/>
            </TouchableOpacity>
          </View>{openDropdown &&
             <View style={{width:"100%",
             height:200,
             backgroundColor:'white',
             elevation:5,
             marginTop:20,
             borderRadius:10,
             }}>
              <View style={{width:'90%',height:45,borderRadius:10,borderWidth:0.5,alignSelf:'center',
            borderColor:'#9e9e9e',flexDirection:'row',justifyContent:'space-between',
            alignItems:'center',paddingLeft:10,paddingRight:10,marginTop:20}}>
              <TextInput style={{width:'80%',height:'100vh'}} placeholder='Search'/>
            </View>
            <FlatList data={time} renderItem={({item,index})=>{
              return(
                <TouchableOpacity style={{width:'90%',alignSelf:'center',justifyContent:'center',borderBottomWidth:0.3
                ,height:40}}
                onPress={()=>{
                  setSelectedTime(item.name);
                  setOpenDropdown(false);
                }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )
            }}/>
            </View>
          }

        </View>

        <View
          style={{
            borderColor: '#B0B0B0',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
          }}>
          <Text style={{color: '#747474', fontSize: 14}}>
            Enter a short message
          </Text>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Enter the value"
              placeholderTextColor='#2B4C5A'
              style={{fontSize: 18, color: '#2B4C5A'}}
            />
            <Pen
              name="pencil"
              size={15}
              style={{
                marginLeft: 200,
                marginBottom: 100,
                borderBottomWidth: 1,
                color: '#747474',
                borderColor: '#747474',
              }}
            />
          </View>
        </View>

        <View style={{marginTop:20}}>
        <SwipeButton
       onSwipeSuccess={handleSwipeSuccess}
       title={text}
         railBackgroundColor="#A6CE39"
         railBorderColor="#A6CE39"
         railFillBackgroundColor="white"
          railFillBorderColor="#A6CE39"
          thumbIconBackgroundColor='white'
          thumbIconBorderColor='white'
          /></View>
      </View>
      <TabNavigator />
    </View>
  );
};

const SearchScreen = () => {};
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
            <Icons1
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
        name="Messages"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Message1
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
            <Icons1
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

const Message = () => {
  const handleSendBroadcast = message => {
    console.log(`Broadcast message: ${message}`);
  };

  return <BroadcastForm onSendBroadcast={handleSendBroadcast} />;
};

export default Message;

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
});
