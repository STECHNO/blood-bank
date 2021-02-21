import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './DrawerScreens/HomeScreen';
import Profile from './DrawerScreens/Profile';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import Donors from './Tabs/Donors';
import Recipients from './Tabs/Recipients';
import BloodTypes from './Tabs/BloodTypes';
import DRMap from './Tabs/DonorsRecipientsMap';
import { connect } from 'react-redux';
import { signOut } from '../store/action';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={{
          title: 'Home', headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ), headerStyle: { backgroundColor: '#B30E05' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
        }} />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#B30E05' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
};


const donors = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#B30E05' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Donors" component={Donors} options={{ title: 'Donors' }} />
    </Stack.Navigator>
  );
};

const recipients = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#B30E05' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Recipients" component={Recipients} options={{ title: 'Recipients' }} />
    </Stack.Navigator>
  );
};

const bloodTypes = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#B30E05' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="BloodTypes" component={BloodTypes} options={{ title: 'Blood Types' }} />
    </Stack.Navigator>
  );
};

const drmap = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (<NavigationDrawerHeader navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#B30E05' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="DRMap" component={DRMap} options={{ title: 'Find Donors & Recipients in Map' }} />
    </Stack.Navigator>
  );
};





const DrawerNav = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        drawerToCSM: { props },
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#d8d8d8'
        },
      }} screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="homeScreenStack" options={{ drawerLabel: 'Home' }} component={homeScreenStack} />
      <Drawer.Screen name="profileScreenStack" options={{ drawerLabel: 'Profile' }} component={profileScreenStack} />
      <Drawer.Screen name="Donors" options={{ drawerLabel: 'Donors' }} component={donors} />
      <Drawer.Screen name="Recipients" options={{ drawerLabel: 'Recipients' }} component={recipients} />
      <Drawer.Screen name="BloodTypes" options={{ drawerLabel: 'BloodTypes' }} component={bloodTypes} />
      <Drawer.Screen name="DRMap" options={{ drawerLabel: 'Find Donors & Recipients in Map' }} component={drmap} />
    </Drawer.Navigator>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNav);
