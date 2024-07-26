import React, { createContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

import Welcome from "./screens/Welcome/Welcome";
import SignUp from "./screens/Signup/Signup";
import Reset from "./screens/Reset/Reset";
import Home from "./screens/Home/Home";
import Verify from "./screens/Verification/verify";
import Login from "./screens/Login/Login";
import WebView from "./screens/Webview/Webview";
import Change from "./screens/ChangePassword/change";
import Signals from "./screens/Signals/Signals";
import Profile from "./screens/Profile/Profile";
import Subscriptions from "./screens/Subscriptions/subscriptions";

const Stack = createNativeStackNavigator();
export const URLContext = createContext();

export default function App() {
  const [apiUrl, setApiUrl] = useState('');

  const fetchAPIURL = async () => {
    try {
      const response = await axios.get('https://play929.vercel.app/config.json');
      if (response.status === 200) {
        const URL = response.data.Link;
        setApiUrl(URL);
      }
    } catch (error) {
      console.error("Error fetching API URL:", error);
    }
  };

  useEffect(() => {
    fetchAPIURL();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" />
      <URLContext.Provider value={apiUrl}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />
            <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Subscriptions" component={Subscriptions} options={{ headerShown: false }} />
            <Stack.Screen name="WebView" component={WebView} options={{ headerShown: false }} />
            <Stack.Screen name="Change" component={Change} options={{ headerShown: false }} />
            <Stack.Screen name="Signals" component={Signals} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </URLContext.Provider>
    </>
  );
}
