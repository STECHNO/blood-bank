import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { signOut, donateBlood, requestBlood, getProfileData } from '../../../store/action';
import auth from '@react-native-firebase/auth';



const HomeTab = (props) => {
  const [spinner, setSpinner] = useState(false);
  const [requestBlood, setRequestBlood] = useState(props.app.requestSuccess)

  // let {firstName, lastName, bloodGroup} = props.authUser.profileData;


  useEffect(() => {
    // console.log('homeTab', props.authUser.profileData)
    if (props.authUser.user == null) {
      props.navigation.push('Auth');
    }
    else{
      props.getProfileData(props.authUser.user)
    }
  }, []);


  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcome}>
        {props.authUser.profileData.firstName != '' && (
          <View>
            <Text style={{ color: '#fff' }}>Welcome: {`${props.authUser.profileData.firstName } ${props.authUser.profileData.lastName}` }</Text>
            <Text style={{ color: '#fff' }}>Blood Group: {props.authUser.profileData.bloodGroup} </Text>
          </View>
        )}
        {props.authUser.profileData.firstName === '' && (<Spinner style={styles.btnText} color='#fff' />)}
        
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.cards} onPress={() => {
          props.donateBlood(props.authUser.profileData);
        }}>
          <Text style={styles.cardText}>Donate Blood</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cards} onPress={() => {
          props.requestBlood(props.authUser.profileData);
        }}>
          <Text style={styles.cardText}>Request For Blood</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    backgroundColor: '#C34632',
    width: '85%',
    height: 80,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    width: '85%',
    marginTop: 50,
  },
  cards: {
    marginTop: 30,
    height: 100,
    width: 'auto',
    borderWidth: 1,
    borderColor: '#C34632',
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#B30E05',
  },
  btn: {
      marginTop: 10,
      width: '100%',
      height: 40,
      backgroundColor: '#B30E05',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
  },
  btnText: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Lato-Regular',
      color: '#fff',
  }
})

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
  getProfileData: (uid) => dispatch(getProfileData(uid)),
  donateBlood: (data) => dispatch(donateBlood(data)),
  requestBlood: (data) => dispatch(requestBlood(data)),
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);