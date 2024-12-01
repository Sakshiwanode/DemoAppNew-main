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
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native';
import { theme, isDarkTheme } from '../Redux/AuthSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, FontSize } from '../constants/Colors';
import Header from '../constants/Header';

const LoanApplyScreen = ({ navigation }: any) => {
  const [loanAmount, setLoanAmount] = useState(40000);
  const maxLoan = 500000;
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
        { backgroundColor: isDarkMode ? Colors.black : Colors.white },
      ]}
    >
      <StatusBar hidden />


      <View style={styles.topSection}>
        <Image
          source={require('../images/loanimage.png')}
          style={styles.image}
          resizeMode="contain"
        />
         <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      </View>

      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}
      >
        <Text
          style={[
            styles.mainHeading,
            { color: isDarkMode ? Colors.primary : Colors.primary },
          ]}
        >
          Select Loan Amount
        </Text>
        <Text
          style={[
            styles.subHeading,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          Enter the loan amount you wish to apply for
        </Text>

        <View style={styles.inputContainer}>
          <Text style={[styles.currencySymbol, { color: isDarkMode ? Colors.white : Colors.black}]}>
            ₹
          </Text>
          <TextInput
            style={[
              styles.loanInput,
              { color: isDarkMode ? Colors.white : Colors.black },
            ]}
            keyboardType="numeric"
            value={String(loanAmount)}
            onChangeText={(text) => {
              const newAmount = Number(text);
              if (newAmount >= 100 && newAmount <= maxLoan) {
                setLoanAmount(newAmount);
              }
            }}
          />
        </View>

        <View style={styles.progressContainer}>
          <Text style={[styles.progressText, { color: isDarkMode ? Colors.white : Colors.black }]}>₹100</Text>
          <View style={styles.progressBarWrapper}>
            <View
              style={[
                styles.progressBar,
                { width: `${(loanAmount / maxLoan) * 100}%` },
              ]}
            />
          </View>
          <Text style={[styles.progressText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            ₹{maxLoan.toLocaleString()}
          </Text>
        </View>

        <Text
          style={[
            styles.mainHeading,
            { color: isDarkMode ? Colors.primary : Colors.primary },
          ]}
        >
          Select Loan Tenure
        </Text>
        <Text
          style={[
            styles.subHeading,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          Choose your loan in terms of months, year
        </Text>
        <View style={styles.tenureContainer}>
          <Text style={styles.tenureText}>2 Years</Text>
          <Icon name="chevron-down" size={28} color="rgba(0, 0, 0, 0.5)" />
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.primary,
              borderColor: isDarkMode ? Colors.blue : Colors.gray,
            },
          ]}
          onPress={() => navigation.navigate('AadharVerify')}
        >
          <Text
            style={[styles.buttonText, { color: isDarkMode ? Colors.white : Colors.white }]}
          >
            Continue to Apply
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cancel')}>
          <Text
            style={[
              styles.cancelText,
              { color: isDarkMode ? Colors.accent : Colors.primary },
            ]}
          >
            Cancel
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
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 470,
    height: 400,
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
  bottomSection: {
    flex: 0.6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  mainHeading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: FontSize.medium,
    paddingLeft: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    marginRight: 5,
  },
  loanInput: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressBarWrapper: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
  },
  progressText: {
    fontSize: FontSize.medium,
  },
  tenureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 15,
    marginBottom: 20,
  },
  tenureText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  continueButton: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth:1,
  },
  buttonText: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  cancelText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoanApplyScreen;
