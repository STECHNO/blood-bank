import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import bloodDrop from '../Image/b3.png';



function SplashScreen({ navigation }) {
  return (
    <LinearGradient colors={['#8B0001', '#9E1711', '#B30E05', '#C34632']} style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.drop} source={bloodDrop} />
        <Text style={{ fontFamily: 'Lato-Regular', color: '#fff', marginTop: 10 }} >You Can Donate Blood To Save Important Life's</Text>
        <Text style={{ fontFamily: 'Lato-Regular', color: '#fff', marginTop: 5 }} >You Can Also Find Blood Donor's</Text>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        <Text style={{ fontFamily: 'Lato-Regular', color: '#fff' }} onPress={() => navigation.replace('Auth')} >Continue</Text>
       
        <Icon type="FontAwesome" ios='arrow-right' android='arrow-right' style={{ fontSize: 20, color: '#fff', marginBottom: 10, marginLeft: 10 }} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  drop: {
    width: 200,
    height: 325,
  }
})

export default SplashScreen;


{/* <Text style={{fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',}}>
    Sign in with Facebook
  </Text> */}