import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {CountryPicker} from 'react-native-country-codes-picker';

const PhoneLogin = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [countryFlag, setCountryFlag] = useState('');
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    setShowIcon(true);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icons name="chevron-left" size={40} style={styles.icon} />
          <Text style={styles.phoneNumberText}>Enter your phone number</Text>
        </View>
        <View style={styles.phoneNumberInput}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              width: '32%',
              backgroundColor: '#F2F2F7',
              height: 48,
              borderColor: '#A5A5A5',
              top: 5,
              borderBottomLeftRadius: 4,
              borderTopLeftRadius: 4,
            }}>
            <Text
              style={{
                color: '#2B2B2B',
                fontSize: 16,
                padding: 10,
              }}>
              {countryFlag} {countryCode}
              {showIcon && (
                <Entypo name="triangle-down" size={22} color="#2B4C5A" />
              )}
            </Text>
          </TouchableOpacity>
          <CountryPicker
            show={show}
            pickerButtonOnPress={item => {
              setCountryFlag(item.flag);
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="555 555 5555"
            placeholderTextColor="#BBBBC1"
            style={styles.phoneNumberInputBox}
          />
        </View>

        <Text style={styles.messageText}>
          We will send a 6-digit code to verify your
        </Text>
        <Text style={styles.messageText}>
          number. Message and data rates may apply.
        </Text>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={600}>
          <View
            style={[
              styles.buttonContainer,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                navigation.navigate('OTP');
              }}>
              <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default PhoneLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  icon: {
    marginTop: -5,
    color: '#2B4C5A',
  },
  phoneNumberText: {
    fontSize: 20,
    marginBottom: 15,
    color: '#2B4C5A',
    marginLeft: 30,
  },
  phoneNumberInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  phoneNumberInputBox: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#F2F2F7',
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 30,
  },
  messageText: {
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#2B4C5A',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -500,
    left: 0,
    right: 0,
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
