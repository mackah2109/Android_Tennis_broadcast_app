import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Icons from 'react-native-vector-icons/EvilIcons';

const OtpAuthentication = ({navigation}) => {
  const inputRefs = useRef([]);

  const focusNextInput = index => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = index => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleChange = (text, index) => {
    if (text.length === 1) {
      focusNextInput(index);
    } else if (text.length === 0) {
      focusPreviousInput(index);
    }
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <TextInput
          key={i}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={text => handleChange(text, i)}
          ref={ref => (inputRefs.current[i] = ref)}
          autoFocus={i === 0} 
          selectTextOnFocus 
        />,
      );
    }
    return inputs;
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icons name="chevron-left" size={40} style={styles.icon} />
        </View>
        <View style={styles.container1}>{renderInputs()}</View>
        <Text style={styles.messageText}>
          We sent a 6-digit code to 7149149970
        </Text>
        <Text style={styles.messageText}>Enter the code above.</Text>

        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={600}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              bottom: -430,
            }}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 1,
                borderColor: '#2B4C5A',
                width: '55%',
              }}>
              <Text style={styles.signTerm}>
                Didn’t Get a Code? Resend code
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.buttonContainer,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.nextButtonText}>VERIFY</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default OtpAuthentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#2B4C5A',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: '#2B4C5A',
  },
  contentContainer: {
    padding: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -500,
    left: 0,
    right: 0,
  },
  messageText: {
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#2B4C5A',
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
  signTerm: {
    color: '#2B4C5A',
  },
});
