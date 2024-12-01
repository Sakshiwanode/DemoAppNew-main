import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, useColorScheme } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Dashboard/Home';
import ActiveLoanScreen from '../screens/Dashboard/ActiveLoan';
import ProfileScreen from '../screens/Dashboard/Profile';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const themeColors = {
    background: isDarkMode ? '#007BFF' : '#007BFF',
    activeTintColor: '#f9fff6',
    inactiveTintColor: isDarkMode ? '#2c2929' : '#0e0c0c',
    wrapperBackground: isDarkMode ? '#0c0c0c' : '#F5F5F5',
    shadowColor: isDarkMode ? '#000' : '#b97272', 
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: themeColors.wrapperBackground }]}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: [
            styles.tabBar,
            {
              backgroundColor: themeColors.background,
              shadowColor: themeColors.shadowColor, 
              shadowRadius: 5,
            },
          ],
          tabBarActiveTintColor: themeColors.activeTintColor,
          tabBarInactiveTintColor: themeColors.inactiveTintColor,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ActiveLoan"
          component={ActiveLoanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  tabBar: {
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
   
  },
});
