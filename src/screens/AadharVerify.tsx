import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { theme, isDarkTheme } from '../Redux/AuthSlice';
import { Colors, FontSize } from '../constants/Colors';
import Header from '../constants/Header';

const AadharScreen = ({ navigation }: any) => {
  const [isAadhar, setIsAadhar] = useState(true);
  const [aadharOrPanNumber, setAadharOrPanNumber] = useState('');
  
  // Redux setup
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme)); // Apply the theme based on the system's color scheme
  }, [systemColorScheme, dispatch]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.white: Colors.lightBackground },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
     

      <View style={styles.topSection}>

        <Image
          source={require('../images/adharotp.png')}
          style={styles.image}
          resizeMode="cover"
        />
         <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      </View>

      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: isDarkMode ? Colors.primary : Colors.primary },
          ]}
        >
          Verify Your Identity
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: isDarkMode ? Colors.lightGray : Colors.black },
          ]}
        >
          Select your verification method and enter the details.
        </Text>

        <View style={styles.verificationToggle}>
          <TouchableOpacity
            onPress={() => setIsAadhar(true)}
            style={[styles.toggleButton, isAadhar ? styles.activeButton : {}]}
          >
            <Text
              style={[styles.toggleButtonText, isAadhar ? styles.activeButtonText : {}]}
            >
              Aadhar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsAadhar(false)}
            style={[styles.toggleButton, !isAadhar ? styles.activeButton : {}]}
          >
            <Text
              style={[styles.toggleButtonText, !isAadhar ? styles.activeButtonText : {}]}
            >
              PAN
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {isAadhar ? 'Aadhar Number' : 'PAN Number'}
          </Text>
          <TextInput
            style={[
              styles.inputField,
              {
                backgroundColor: isDarkMode
                  ? Colors.black
                  : Colors.lightInputBackground,
                color: isDarkMode ? Colors.white : Colors.black,
                borderColor: isDarkMode ? Colors.blue : Colors.gray,
              },
            ]}
            placeholder={isAadhar ? 'Enter your 12-digit Aadhar number' : 'Enter your 10-digit PAN number'}
            placeholderTextColor={isDarkMode ? Colors.white: Colors.placeholderLight}
            keyboardType="numeric"
            maxLength={isAadhar ? 12 : 10}
            value={aadharOrPanNumber}
            onChangeText={setAadharOrPanNumber}
          />
        </View>

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: isDarkMode ? Colors.black : Colors.primary ,
            borderColor: isDarkMode ? Colors.blue : Colors.gray,
          }]}
          onPress={() => {
            if (isAadhar) {
              navigation.navigate('AadharVerificationSuccess');
            } else {
              navigation.navigate('PanVerificationSuccess');
            }
            navigation.navigate('UserDetail');
          }}
        >
          <Text
            style={[styles.submitButtonText,
               { color: isDarkMode ? Colors.white : Colors.white,
             
             }]}
          >
            Verify
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
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
  bottomSection: {
    flex: 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: FontSize.medium,
    color: Colors.mediumGray,
    padding:10,
    paddingLeft:1,
  },
  verificationToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    
  },
  toggleButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  toggleButtonText: {
    color: '#5a5757',
    fontSize: 16,
  },
  activeButtonText: {
    color: '#007BFF',
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: FontSize.large,
    color: Colors.primary,
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: FontSize.medium,
  },
  submitButton: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default AadharScreen;
