import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import { theme, isDarkTheme } from '../Redux/AuthSlice';

const Header = ({ navigation }) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back"
          size={24}
          color={isDarkMode ? Colors.accent : Colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50, 
    paddingHorizontal: 10,
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    // backgroundColor: 'transparent', 
  },
});

export default Header;
