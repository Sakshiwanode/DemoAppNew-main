import React, { useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { theme, isDarkTheme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';

const HomeScreen = ({ userName = "UserName" }) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme)); // Update theme in Redux store
  }, [systemColorScheme, dispatch]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp(); 
      return true;
    });
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.topSection}>
        <Text
          style={[
            styles.heading,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          Welcome {userName}
        </Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={isDarkMode ? Colors.white : Colors.black}
          style={styles.notificationIcon}
        />
      </View>
      <Text
        style={[
          styles.subText,
          { color: isDarkMode ? Colors.lightGray : Colors.mediumGray },
        ]}
      >
        Lorem ipsum dolor sit amet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  notificationIcon: {
    marginRight: 8,
  },
  subText: {
    marginTop: 8,
    fontSize: FontSize.medium,
  },
});

export default HomeScreen;
