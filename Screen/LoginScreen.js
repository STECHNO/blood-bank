import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import bloodDrop from '../Image/b3.png';
import { Icon } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';



function LoginScreen({ navigation }) {
  return (
    <LinearGradient colors={['#B30E05', '#C34632']} style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.drop} source={bloodDrop} />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <Text style={{ fontSize: 25, fontFamily: 'Lato-Regular' }}>LOGIN</Text>
        </View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <View style={styles.fieldContainer}>
            <View style={{ width: 45 }}>
              <Icon type="FontAwesome" ios='user' android='user' style={styles.icon} />
            </View>
            <View >
              <TextInput value='' style={styles.input} placeholder='Email' placeholderTextColor='#8B0001' />
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <View style={{ width: 45 }} >
              <Icon type="FontAwesome" ios='key' android='lock' style={styles.icon} />
            </View>
            <View>
              <TextInput value='' style={styles.input} placeholder='Password' placeholderTextColor='#8B0001' secureTextEntry={true} />
            </View>
          </View>
          <View style={{ width: '100%' }}>
            <View>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.push('DrawerNav')} >
                <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'Lato-Regular', color: '#8B0001' }} >Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 7 }} >
            <View style={{}}>
              <Text style={{ color: '#fff', fontSize: 13, fontFamily: 'Lato-Regular' }}>Forgot Password?</Text>
            </View>
            <View style={{}}>
              <Text style={{ color: '#fff', fontSize: 13, fontFamily: 'Lato-Regular' }} onPress={() => navigation.push('RegisterScreen')} >Don't have an account? Sign Up</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text></Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 1,
    width: '100%',
  },
  drop: {
    width: 50,
    height: 70,
  },
  fieldContainer: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderRadius: 1,
    borderWidth: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  icon: {
    backgroundColor: '#C333',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    padding: 12
  },
  input: {
    padding: 5,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  btn: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  }
})
export default LoginScreen;