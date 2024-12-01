import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { theme, isDarkTheme } from '../Redux/AuthSlice';
import { Colors, FontSize } from '../constants/Colors';
import Header from '../constants/Header';

const ApplicationSubmitScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme)); 
  }, [systemColorScheme, dispatch]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Header navigation={navigation} title={undefined}  />

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text
          style={[
            styles.heading,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          Hey User!!!
        </Text>
        <Text
          style={[
            styles.subheading,
            { color: isDarkMode ? Colors.accent : Colors.primary },
          ]}
        >
          Application created successfully for Loan
        </Text>
        <Text
          style={[
            styles.loremText,
            { color: isDarkMode ? Colors.lightGray : Colors.mediumGray },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada lectus nec felis auctor, non tempor mi volutpat. Aenean lacinia odio id ex lacinia euismod. Quisque vulputate, dui vel sollicitudin fringilla, felis dui fermentum sapien, in efficitur justo nisl non nulla.
        </Text>
      </View>

      {/* Bottom Section */}
      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.primary,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isDarkMode ? Colors.white : Colors.lightBackground,
            },
          ]}
          onPress={() => navigation.navigate('TabNavigator')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isDarkMode ? Colors.black : Colors.primary },
            ]}
          >
            Next Steps
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
  appbar: {
    elevation: 0,
  },
  backArrow: {
    position: 'absolute',
    left: 10,
    top: -1,
  },
  mainContent: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: FontSize.xLarge,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loremText: {
    textAlign: 'center',
    fontSize: FontSize.medium,
    lineHeight: 24,
  },
  bottomSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default ApplicationSubmitScreen;
