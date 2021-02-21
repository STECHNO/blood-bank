import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import bloodDrop from '../Image/b3.png';
import { Item, Input, Label, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { signIn, postUser, signUp } from '../store/action';
import auth from '@react-native-firebase/auth';


function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();



  const onAuthStateChanged = (user) => {
    if(props.authUser.user == null){
      setUser(null)
    }
    else if ((user != null) && (props.authUser.user != null)){
      setUser(user);
      props.navigation.push('DrawerNav');
    }
    console.log('login ---AUTH', user)
    console.log('login ---REDUX', props.authUser.user)
    if (initializing) setInitializing(false);
    // if (props.authUser.user != null) {
    //   console.log('login', props.authUser.user)
    //   props.navigation.push('DrawerNav');
    // }
    // if (user) {
    //   console.log('login', props.authUser.user)
    //   props.navigation.push('DrawerNav');
    // }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [props.authUser.user]);

  if (initializing) return (
    <LinearGradient colors={['#B30E05', '#C34632']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Spinner color='#fff' />
      </View>
    </LinearGradient>
  );




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
            <Item floatingLabel style={{ marginBottom: 10 }}>
              <Label style={styles.labelStyle}>Email</Label>
              <Input style={styles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
            </Item>
            <Item floatingLabel style={{ marginBottom: 10 }}>
              <Label style={styles.labelStyle}>Password</Label>
              <Input style={styles.inputStyle} secureTextEntry={true} value={password} onChangeText={(pass) => setPassword(pass)} />
            </Item>
          </View>
          <View style={{ width: '100%' }}>
            <View>
              <TouchableOpacity style={styles.btn} onPress={() => {
                props.signIn(email, password);
              }}>
                {!props.authUser.spinner && (<Text style={styles.btnText}>Sign In</Text>)}
                {props.authUser.spinner && (<Spinner style={styles.btnText} color='red' />)}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 7 }} >
            <View style={{}}>
              <Text style={{ color: '#fff', fontSize: 13, fontFamily: 'Lato-Regular' }}>Forgot Password?</Text>
            </View>
            <View style={{}}>
              <Text style={{ color: '#fff', fontSize: 13, fontFamily: 'Lato-Regular' }} onPress={() => props.navigation.push('RegisterScreen')} >Don't have an account? Sign Up</Text>
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
    width: '100%',
    height: 'auto',
    marginBottom: 10,
  },
  labelStyle: {
    color: '#fff',
    paddingLeft: 5,
    fontFamily: 'Lato-Regular'
  },
  inputStyle: {
    color: '#fff',
    paddingLeft: 5,
    fontFamily: 'Lato-Regular'
  },
  icon: {
    backgroundColor: '#C333',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    padding: 12
  },
  btn: {
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#8B0001',
  }
})

const mapStateToProps = (state) => ({
  authUser: state.authUser,
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
  signUp: (email, password) => dispatch(signUp(email, password)),
  postUser: (user) => dispatch(postUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);