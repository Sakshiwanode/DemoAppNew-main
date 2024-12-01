import React, { useEffect } from 'react';
import {
  View,
  Text,
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

const DocumentBankScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme)); // Set the theme based on the system's color scheme
  }, [systemColorScheme, dispatch]);

  const handleImageUpload = () => {
    console.log('Open file picker for document upload');
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Header navigation={navigation}  />

      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleImageUpload}>
          <Image
            source={require('../images/BankDocument.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.heading,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          Document for Upload
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: isDarkMode ? Colors.placeholderDark : Colors.placeholderLight },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit facilisis lorem.
        </Text>
      </View>

      {/* Bottom Section */}
      <View
        style={[
          styles.bottomSection,
          { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground },
        ]}
      >
      
        <View style={styles.buttonRow}>
          <TouchableOpacity>
            <Text
              style={[
                styles.flatListItem,
                { color: isDarkMode ? Colors.white : Colors.black },
              ]}
            >
              Signature
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.flatListItem,
                { color: isDarkMode ? Colors.white : Colors.black },
              ]}
            >
              Clear
            </Text>
          </TouchableOpacity>
        </View>

       
        <View
          style={[
            styles.signatureBox,
            {
              backgroundColor: isDarkMode ? Colors.mediumGray : Colors.lightGray,
              borderColor: isDarkMode ? Colors.mediumGray : Colors.gray,
            },
          ]}
        >
          <Text
            style={{
              color: isDarkMode ? Colors.placeholderDark : Colors.placeholderLight,
              fontSize: FontSize.medium,
            }}
          >
            Add Signature Here
          </Text>
        </View>

        
        <TouchableOpacity
          style={[
            styles.nextButton,
            { backgroundColor: isDarkMode ? Colors.black : Colors.primary ,
              borderColor: isDarkMode ? Colors.blue : Colors.gray,
            },
          ]}
          onPress={() => navigation.navigate('ApplicationSubmit')}
        >
          <Text
            style={[
              styles.nextButtonText,
              { color: isDarkMode ? Colors.white : Colors.white,
               
               },
            ]}
          >
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
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: FontSize.xLarge,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: FontSize.medium,
  },
  bottomSection: {
    flex: 0.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  flatListItem: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  signatureBox: {
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: -40,
  },
  nextButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 60,
    borderWidth:1,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default DocumentBankScreen;
