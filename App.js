import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNav from './Screen/Drawer';
// import Donors from './Screen/Tabs/Donors';
// import BloodTypes from './Screen/Tabs/BloodTypes';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
        {/* <Stack.Screen
          name="Donors"
          component={Donors}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#B30E05' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} />
        <Stack.Screen
          name="BloodTypes"
          component={BloodTypes}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#B30E05' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
