import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons1 from 'react-native-vector-icons/FontAwesome6';
import Icons2 from 'react-native-vector-icons/FontAwesome';
import Message1 from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/Entypo';

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


const ProfileScreen = () => {
    const images = [
        require('../Assets/img1.png'),
        require('../Assets/img2.png'),
        require('../Assets/img3.png'),
        require('../Assets/img4.png'),
        require('../Assets/img5.png'),
        require('../Assets/img6.png'),
      ];
      const renderImageItem = ({ item }) => (
        <Image source={item} style={styles.img} />
      );
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    
      <View style={styles.header}>
        <Menu name="menu" size={40} style={styles.icon} />
        <Image source={require('../Assets/tennis1.png')} style={styles.logo} />
        <Message1
          name="message1"
          size={25}
          style={{
            color: 'white',
            marginRight: 20,
          }}
        />
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
                name="settings-sharp"
                size={30}
                style={{marginLeft: 100, color: '#D9D9D9'}}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                padding: 0,
                paddingBottom: 10,
                borderColor: '#EBEBEB',
              }}>
              <View style={{alignItems: 'center', alignSelf: 'center'}}>
                <Text
                  style={{color: '#2B4C5A', fontSize: 18, fontWeight: 'bold'}}>
                  4.5
                </Text>
                <Text style={{color: '#747474', fontSize: 12}}>NTRP</Text>
              </View>
              <View>
                <Text
                  style={{color: '#2B4C5A', fontSize: 18, fontWeight: 'bold'}}>
                  Male
                </Text>
                <Text style={{color: '#747474', fontSize: 12}}>Gender</Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#2B4C5A',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 12,
                  }}>
                  35
                </Text>
                <Text style={{color: '#747474', fontSize: 12}}>Years Old</Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#2B4C5A',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  {'<'}5
                </Text>
                <Text style={{color: '#747474', fontSize: 12}}>Miles Away</Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#2B4C5A',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  3.5k
                </Text>
                <Text style={{color: '#747474', fontSize: 12}}>Followers</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              marginBottom: 10,
              padding: 15,
              elevation: 3,
            }}>
            <Text style={{fontSize: 16, color: '#747474'}}>
              I’ve played since I was 10. I’m in Orange County and am looking
              for causal games with similar skill levels.
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#A6CE39'}]}>
              <Text style={styles.btnTxt}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#2B4C5A'}]}>
              <Text style={styles.btnTxt}>Chat</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              marginBottom: 10,
              padding: 15,
              elevation: 3,
              marginTop: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#747474', fontSize: 12}}>Availabilty</Text>
              <Text style={styles.smallTxt}>Mon</Text>
              <Text style={styles.smallTxt}>Tue</Text>
              <Text style={styles.smallTxt}>Wed</Text>
              <Text style={styles.smallTxt}>Sat</Text>
              <Text style={styles.smallTxt}>Sun</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
              <Text style={{color: '#747474', fontSize: 12}}>Match Type</Text>
              <Text style={styles.nsmallTxt}>Singles</Text>
              <Text style={styles.nsmallTxt}>Doubles</Text>
            </View>
          </View>
        </View>
        
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 60,
            marginTop: -20,
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Icons1
            name="image"
            size={25}
            style={{
              color: '#2B4C5A',
              marginTop: 18,
            }}
          />
          <Icons2
            name="home"
            size={28}
            style={{
              color: '#2B4C5A',
              marginTop: 18,
            }}
          />
        </View>
       
        <View style={styles.imageGridContainer}>
        <FlatList
          data={images}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.imageGridContainer}
        /></View>
        
        <TabNavigator />
    </ScrollView>
  );
};

export default ProfileScreen;

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
    marginLeft: 20,
  },
  btn: {
    width: '48%',
    backgroundColor: 'green',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  smallTxt: {
    backgroundColor: '#E4F2FF',
    padding: 3,
    borderRadius: 2,
    color: '#6C93A3',
    fontSize: 10,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  nsmallTxt: {
    backgroundColor: '#E4F2FF',
    padding: 3,
    borderRadius: 2,
    color: '#6C93A3',
    fontSize: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 10,
  },
  img:{marginLeft:0,
    width: '32%',
    aspectRatio: 1,
    marginRight: '2%',
    marginBottom:10
  },
 
});
