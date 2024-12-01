import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { theme, isDarkTheme } from '../Redux/AuthSlice'; 
import { Colors } from '../constants/Colors';
import Header from '../constants/Header';

const BankDetailScreen = ({ navigation }: any) => {

const colorScheme = useColorScheme();
const dispatch = useDispatch();
const isDarkMode = useSelector(isDarkTheme);

useEffect(() => {
  dispatch(theme(colorScheme)); 
}, [colorScheme, dispatch]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}>
           
      <View style={styles.topSection}>
      <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
        <Text style={[styles.topText, { color: isDarkMode ? Colors.white : Colors.black }]}>
          Bank Details
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={[
              styles.card,
              { backgroundColor: isDarkMode ? Colors.white: Colors.secondary },
            ]}>
            <DetailRow label="Bank Name" value="ABC Bank" isDarkMode={isDarkMode} />
            <DetailRow label="Account Holder Name" value="John Doe" isDarkMode={isDarkMode} />
            <DetailRow label="Account Number" value="1234567890" isDarkMode={isDarkMode} />
            <DetailRow label="IFSC Code" value="ABCD0123456" isDarkMode={isDarkMode} />
            <DetailRow label="Customer ID" value="987654321" isDarkMode={isDarkMode} />
            <DetailRow label="Debit Card Number" value="1234 5678 9012 3456" isDarkMode={isDarkMode} />
            <DetailRow label="Mobile Number" value="+91 9876543210" isDarkMode={isDarkMode} />
            <DetailRow label="Email" value="johndoe@example.com" isDarkMode={isDarkMode} />
            <DetailRow
              label="Address"
              value="123, Main Street, City, State, PIN"
              isDarkMode={isDarkMode}
            />
            <DetailRow label="Other Details" value="Net Banking Enabled" isDarkMode={isDarkMode} />

            <TouchableOpacity
              style={[styles.button, styles.changeDetailsButton]}>
              <Text style={[styles.buttonText, { color: isDarkMode ? Colors.white : Colors.black }]}>
                Change Details
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity
            style={[styles.moveAheadButton, { backgroundColor: isDarkMode ? Colors.white : Colors.black }]}
            onPress={() => {
              navigation.navigate('DocumentBank');
            }}>
            <Text
              style={[styles.moveAheadText, { color: isDarkMode ? Colors.black : Colors.white }]}>
              Move Ahead
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const DetailRow = ({ label, value, isDarkMode }: any) => (
  <Text style={[styles.detailText, { color: isDarkMode ? Colors.white : Colors.black }]}>
    <Text style={[styles.label, { color: isDarkMode ? Colors.accent : Colors.primary }]}>
      {label}: 
    </Text>
    <Text style={[styles.value, { color: isDarkMode ? Colors.black : Colors.black }]}>
      {value}
    </Text>
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1e1e1e',
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
    
  },
  topSection: {
    flex: 0.2,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative', 
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  topText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomSection: {
    flex: 0.8,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  scrollView: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  lightCard: {
    backgroundColor: 'rgb(205, 209, 228)',
  },
  darkCard: {
    backgroundColor: '#C4C3D0',
    borderRadius: 33,
  },
  detailText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  value: {
    color: 'black',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  changeDetailsButton: {
    alignSelf: 'center',
  },
  moveAheadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 23,
    alignSelf: 'center',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  moveAheadText: {
    color: '#0f0f0f',
    fontSize: 16,
    fontWeight: 'bold',
  },

  lightMoveAheadText: {
    color: '#ffffff', 
  },
  darkMoveAheadText: {
    color: '#007BFF', 
  },

  darkButton: {
    backgroundColor: '#f3f3f5',
  },
  lightButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
  },
});

export default BankDetailScreen;
