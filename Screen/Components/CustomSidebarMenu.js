import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Thumbnail } from 'native-base';
import { Icon } from 'native-base';

const CustomSidebarMenu = (props) => {
  return (
    <View style={styles.sideMenuContainer}>
      <View style={styles.profileHeader}>
        {props.drawerToCSM.props.authUser.profileData.uri === '' && (
          <View style={styles.icon}>
          <Icon type="FontAwesome" ios='user' android='picture-o' />
          <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '100', fontSize: 10, marginTop: 5 }}>Upload Photo</Text>
        </View>
        )}
        {(props.drawerToCSM.props.authUser.profileData.uri !== '') && (
          <Thumbnail source={{ uri: props.drawerToCSM.props.authUser.profileData.uri }} />
        )}
        <Text style={styles.profileHeaderText}> {`${props.drawerToCSM.props.authUser.profileData.firstName} ${props.drawerToCSM.props.authUser.profileData.lastName}`} </Text>
      </View>
      <View style={styles.profileHeaderLine} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          style={{ marginTop: 150 }}
          label={({ color }) => <Text style={{ color: '#d8d8d8' }}>Sign Out</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    props.drawerToCSM.props.signOut();
                    setTimeout(() => {
                      props.navigation.replace('Auth');
                    }, 500);
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const styles = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#B30E05',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#B30E05',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  icon: {
    backgroundColor: '#C333',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 90,
    height: 90,
  },
});
