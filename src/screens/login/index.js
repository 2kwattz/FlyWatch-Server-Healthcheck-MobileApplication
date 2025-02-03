// HomeScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppContext } from '../../context/AppContext';
import servervoltsLogoImage from '../../../assets/images/logo.png'
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage, { showMessage } from "react-native-flash-message";
import appLogo from '../../../assets/images/icons/app_main_icon.jpg';
import axios from 'axios';
import { Cookies } from '@react-native-cookies/cookies'; // Install this library if you haven't yet.

export default function LoginScreen({ navigation }) {

  const { passwordContext, setPasswordContext } = useContext(AppContext)

  const spamEmailDomains = [
    'mailinator.com',
    'guerrillamail.com',
    '10minutemail.com',
    'tempmail.com',
    'discard.email',
    'getnada.com',
    'maildrop.cc',
    'throwawaymail.com',
    'tempmailaddress.com',
    'fakeinbox.com',
    'spamgourmet.com',
    'mytrashmail.com',
    'protonmail.com',
    'yopmail.com',
    'mailnesia.com',
    'sharklasers.com',
    'spamcowboy.com',
    'crazymailing.com',
    'spamex.com',
    'jetable.org',
    'binkmail.com',
    'sogetthis.com'
  ];

  const csrfToken = "your-csrf-token"; 
  const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

useEffect(()=>{
  console.log(response)
},[response])

  
  const handlePostRequest = async () => {
    try {
    
      const res = await axios.post(
        'http://150.107.210.11/auth/login/', 
        { username: username, password: password },
        
      );
  
      setResponse(`Success: ${res}`);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
  
      const errorResponse = error.response?.data?.non_field_errors || error.message;
      setResponse(errorResponse || 'An error occurred. Please try again.');
    }
  };
  

  function LoginOnPress() {
    console.log("Button Pressed");

    // Validate email address
    // if (emailAddress.length === 0) {
    //     showMessage({
    //         message: "Email Address cannot be empty",
    //         description: "Please enter a valid Email Address.",
    //         type: "danger",
    //         icon: "danger",
    //         duration: 3000,
    //     });
    //     return; // Exit early if email is empty
    // }

    // if (!emailAddress.includes('@')) {
    //     showMessage({
    //         message: "Invalid Email Address",
    //         description: "Email Address should contain an '@' symbol.",
    //         type: "danger",
    //         icon: "danger",
    //         duration: 5000,
    //     });
    //     return; // Exit early if '@' symbol is missing
    // }

    // if (!emailValidationRegex.test(emailAddress)) {
    //     showMessage({
    //         message: "Invalid Email Format",
    //         description: "Please enter a valid Email Address in the correct format.",
    //         type: "danger",
    //         icon: "danger",
    //         duration: 3000,
    //     });
    //     return; // Exit early if email doesn't match the regex format
    // }

    // // Now, check if email domain is a spam email domain
    // const domain = emailAddress.split('@')[1];
    // if (spamEmailDomains.includes(domain)) {
    //     showMessage({
    //         message: "Spam Email Service Detected",
    //         description: "You are using a temporary or disposable email provider. Please consider using a more permanent email service.",
    //         type: "danger",
    //         icon: "danger",
    //         duration: 3000,
    //     });
    //     return; // Exit early if it's a spam domain
    // }

    // Validate password
    if (password.length === 0) {
        showMessage({
            message: "Password cannot be empty",
            description: "Please enter a valid Password.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if password is empty
    }

    if (password.length < 6) {
        showMessage({
            message: "Password too short",
            description: "Password cannot be less than 6 characters.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if password is too short
    }

    // All validations passed, proceed to the next screen

    handlePostRequest()
   
}


  useEffect(() => {
    console.log("Change in email address", emailAddress)
  }, [emailAddress])
  console.log("I am in Login screen")
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={styles.bodyWrapper}>


      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View style={styles.logoSection}>
          <Image source={appLogo} style={{ height: 150, width: 150, borderRadius: 60 }} />
        </View>
        <View style={{textAlign: "center"}}>
        <Text style={styles.textHeading}>FlyWatch</Text>
        <Text style={styles.textSubHeading}>VoIP Call based Military Flight Alert & Tracking System</Text>

        </View>
        <View style={styles.loginForm}>
          {/* <TextInput style={styles.baseInputText} onChangeText={(value) => setEmailAddress(value)} placeholder="Enter email address" /> */}
          <TextInput style={styles.baseInputText} onChangeText={(value) => setUsername(value)} placeholder="Enter username" />
          <TextInput style={styles.baseInputText} secureTextEntry={true} onChangeText={(value) => setPassword(value)} placeholder="Enter password" />
          <TouchableOpacity>

<Text> Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={LoginOnPress} style={[styles.buttonPrimary,{marginTop:30}]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* </View> */}

        </View>

      </KeyboardAvoidingView>



    </ScrollView>
  );
}
