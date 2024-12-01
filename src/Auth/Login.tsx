import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native';
import { Colors, FontSize } from '../constants/Colors';
import { isDarkTheme, theme } from '../Redux/AuthSlice';

const LoginScreen = ({ navigation }:any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector((state) => isDarkTheme(state)); 

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.white : Colors.white }]}>
      <StatusBar hidden />
      <View style={styles.topSection}>
        <Image
          source={require('../images/mainpage.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={[styles.bottomSection, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
        <Text style={[styles.mainHeading, { color: isDarkMode ? Colors.primary : Colors.primary }]}>
          LandMantra
        </Text>
        <Text style={[styles.subHeading, { color: isDarkMode ? Colors.white : Colors.black }]}>
          Login
        </Text>
        <Text style={[styles.description, { color: isDarkMode ? Colors.lightGray : Colors.darkGray }]}>
          Continue to app
        </Text>

        <TextInput
          style={[
            styles.input,
            {
              color: isDarkMode ? Colors.white : Colors.black,
              backgroundColor: isDarkMode ? Colors.black : Colors.lightInputBackground,
              borderColor: isDarkMode ? Colors.blue : Colors.blue,
            },
          ]}
          placeholder="+91 Phone Number"
          placeholderTextColor={isDarkMode ? Colors.lightGray : Colors.placeholderDark}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TouchableOpacity onPress={() => console.log('Forgot Account')}>
          <Text style={[styles.forgetText, { color: isDarkMode ? Colors.white : Colors.primary }]}>
            Forgot Account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.nextButton,
             { backgroundColor: isDarkMode ? Colors.black : Colors.primary,
              borderColor: isDarkMode ? Colors.blue : Colors.gray,
          }]}
          onPress={() => navigation.navigate('OTPVerify')}
        >
          <Text style={[styles.buttonText, { color: isDarkMode ? Colors.white : Colors.white }]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  mainHeading: {
    fontSize: FontSize.headingxxl,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 70,
    
  },
  subHeading: {
    fontSize: FontSize.heading,
    paddingLeft: 20,
  },
  description: {
    fontSize: FontSize.small,
    marginBottom: 20,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 1,
    alignSelf: 'center',
  },
  forgetText: {
    fontSize: FontSize.small,
    textAlign: 'right',
    width: '90%',
    marginBottom: 20,
    alignSelf: 'center',
  },
  nextButton: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth:1,
   
  },
  buttonText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
