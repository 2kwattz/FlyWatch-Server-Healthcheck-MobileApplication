/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState,useContext,useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ScreenHeader from './src/components/ScreenHeader';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import LoginScreen from './src/screens/login';
import DeploymentsScreen from './src/screens/deployment';
import { AppContext } from './src/context/AppContext';
import FlashMessage, { showMessage } from "react-native-flash-message";



const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [passwordContext, setPasswordContext] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  return (

    // <AppProvider>

    <AppContext.Provider value={{passwordContext,setPasswordContext}}>

     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  options={{headerShown: false,
            header: ({ navigation }) => <ScreenHeader title="Dashboard" navigation={navigation} />,
          }} name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}/>

        <Stack.Screen  options={{
           header: ({ navigation }) => <ScreenHeader title="Flight Tracker Logs" navigation={navigation} />,
          }} name="Deployments" component={DeploymentsScreen}/>
  
      </Stack.Navigator>
    <FlashMessage position="top" /> 
    </NavigationContainer>
    </AppContext.Provider>

  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
