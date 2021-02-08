import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './DrawerScreens/HomeScreen';
import Profile from './DrawerScreens/Profile';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{title: 'Home', headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),headerStyle: {backgroundColor: '#B30E05'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}/>
    </Stack.Navigator>
  );
};

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => ( <NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#B30E05'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold'}}}>
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
};

const DrawerNav = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8'
        }, }} screenOptions={{headerShown: false}} drawerContent={CustomSidebarMenu}>
      <Drawer.Screen name="homeScreenStack" options={{drawerLabel: 'Home'}} component={homeScreenStack} />
      <Drawer.Screen name="profileScreenStack" options={{drawerLabel: 'Profile'}} component={profileScreenStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
