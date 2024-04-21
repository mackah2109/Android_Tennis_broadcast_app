import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios, { Axios } from 'axios'

const Profile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [fnameverify,setFnameVerify]=useState(false);
  const [lnameverify,setLnameVerify]=useState(false);
  const [emailverify,setEmailVerify]=useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const formatDate = (date) => {
    if (date) {
        const formattedDate = new Date(date);
        const month = formattedDate.getMonth() + 1;
        const day = formattedDate.getDate();
        const year = formattedDate.getFullYear();
        return `${month}/${day}/${year}`;
    
    } else {
      return 'MM/DD/YYYY';
    }
  };

  function handleName(e){
    const firstnameVar=e.nativeEvent.text;
    setFirstName(firstnameVar);
    if(firstnameVar.length>1){
      setFnameVerify(true);
    }
  }
  function handleLastname(e){
    const lastnameVar=e.nativeEvent.text;
    setLastName(lastnameVar);
    if(lastnameVar.length>1){
      setLnameVerify(true);
    }
  }

  function handleEmail(e){
    const emailVar=e.nativeEvent.text;
    setEmailAddress(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmailAddress(emailVar);
      setEmailVerify(true);
    }
  }

  const handleSubmit = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email Address:', emailAddress);
    console.log('Birthday:', date);



    const userData={
      firstName,
      lastName,
      emailAddress,
      date
    };
    if(fnameverify && lnameverify && emailverify){
      axios.post("http://192.168.1.14:5002/register",userData).then(response =>{ console.log(response.data)
      if(response.data.status=='ok'){
        Alert.alert("Successfull","Account Created");
      }
      else{
        Alert.alert("Found","User already exists");
      }})
      
    }
    else{
      Alert.alert('Mandatory Fields', 'Please fill all details correctly.');
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#2B4C5A',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../Assets/tennis1.png')} style={styles.image} />
      </View>
      <View style={{padding: 20, paddingTop: 0}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../Assets/profile1.png')}
            style={styles.profile}
          />
          <TouchableOpacity style={styles.icon}>
            <Icons name="camera" size={20} color="#A0A0A0" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            padding: 20,
            marginTop: 20,
          }}>
          <Text style={{color: '#747474', fontSize: 14, fontWeight: 'bold'}}>
            CREATE ACCOUNT
          </Text>

          <View style={styles.inputview}>
            <Text>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor='#2B4C5A'
              value={firstName}
              onChange={(e)=>handleName(e)}
            />
          </View>

          <View style={styles.inputview}>
            <Text>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor='#2B4C5A'
              value={lastName}
              onChange={(e)=>handleLastname(e)}
            />
          </View>

          <View style={styles.inputview}>
            <Text>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor='#2B4C5A'
              value={emailAddress}
              onChange={(e)=> handleEmail(e)}
            />
          </View>

          <View style={styles.inputview}>
            <Text>Birthday</Text>

             <TouchableOpacity
              style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}
              onPress={showDatePicker}>
               <Text style={{ color: '#2B4C5A', fontSize:20,paddingBottom:10}}>{formatDate(date)}</Text>
               <Icons name="chevron-small-down" size={30} marginRight={10} marginTop={-10} color="#B0B0B0"/>
            </TouchableOpacity>
            {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
          </View>
          
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>JOIN TENNISPAL</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  image: {
    width: 50,
    height: 25,
  },
  profile: {
    height: 100,
    width: 100,
  },
  icon: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: -30,
    marginLeft: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputview: {
    borderWidth: 1,
    borderColor: '#B0B0B0',
    marginTop: 15,
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 10,
    fontSize:14
  },
  input:{
    fontSize:18,
    color:'#2B4C5A',
    marginLeft:-5,
    paddingTop:0
  },
  button: {
    backgroundColor: '#A6CE39',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignSelf:'center',
    marginTop:100
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
