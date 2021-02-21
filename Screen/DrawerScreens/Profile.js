import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { Icon, Item, Input, Label, Textarea, ListItem, Text, Radio, Right, Left } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { getCurrentLocation, getUserPlace, getProfileData, updateProfileData, sendPhotoToDb } from '../../store/action';
import auth from '@react-native-firebase/auth';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Thumbnail } from 'native-base';



const Profile = (props) => {
  const [male, setMale] = useState(props.authUser.profileData.gender === 'Male');
  const [female, setFemale] = useState(props.authUser.profileData.gender === 'Female');
  const [gender, setGender] = useState(props.authUser.profileData.gender)
  const [bloodGroup, setBloodGroup] = useState(props.authUser.profileData.bloodGroup);
  const [detectLocation, setDetectLocation] = useState(false);
  const [enterLocation, setEnterLocation] = useState(false);
  const [firstName, setFirstName] = useState(props.authUser.profileData.firstName);
  const [lastName, setLastName] = useState(props.authUser.profileData.lastName);
  const [email, setEmail] = useState(props.authUser.profileData.email);
  const [dob, setDob] = useState(props.authUser.profileData.dob);
  const [mobileNumber, setMobileNumber] = useState(props.authUser.profileData.mobileNumber);
  const [address, setAddress] = useState(props.authUser.profileData.address);
  const [latitude, setLatitude] = useState(props.app.latitude);
  const [longitude, setLongitude] = useState(props.app.longitude);
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setUri] = useState(props.authUser.profileData.uri);


  useEffect(() => {
    if (props.authUser.profileData.uri != null) {
      setUri(props.authUser.profileData.uri);
    }
    if (props.authUser.user != null) {
      props.getProfileData(props.authUser.user);
    }
  }, []);

  const option = {
    title: 'Select Photo',
    mediaType: 'Photo',
    maxWidth: 100,
    maxHeight: 100,
  }


  const takePhoto = () => {
    launchCamera(option, (response) => {
      setModalVisible(!modalVisible)
      props.sendPhotoToDb(response.uri);
      // setUri(response.uri)
      console.log(response.uir);
      if (response.didCancel) {
        console.log('Cancel')
      }
      else if (response.error) {
        console.log(error)
      }
    })
  }

  const selectPhoto = () => {
    launchImageLibrary(option, (response) => {
      setModalVisible(!modalVisible)
      props.sendPhotoToDb(response.uri);
      // setUri(response.uri)
      console.log(response.uir);
      if (response.didCancel) {
        console.log('Cancel')
      }
      else if (response.error) {
        console.log(error)
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView persistentScrollbar={true} >
        <View style={{ padding: 16 }}>
          <View style={styles.profileSnapCon}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25, paddingBottom: 25 }} >
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{ flexDirection: "row-reverse", marginTop: 5 }}>
                      <Icon ios='ios-close-circle' android="ios-close-circle" style={{ fontSize: 50, color: '#8B0001' }} onPress={() =>
                        setModalVisible(!modalVisible)
                      } />
                    </View>
                    <View style={{ marginTop: 20 }}>
                      <TouchableOpacity style={styles.btn} onPress={() =>
                        takePhoto()
                      }>
                        <Text style={styles.textStyle}>Take Photo From Camera</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btn} onPress={() =>
                        selectPhoto()
                      }>
                        <Text style={styles.textStyle}>Select Photo From Gallery</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity style={styles.icon} onPress={() => {
                setModalVisible(true);
              }} >
                {props.authUser.profileData.uri === '' && (
                  <View style={styles.icon}>
                    <Icon type="FontAwesome" ios='user' android='picture-o' />
                    <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '100', fontSize: 10, marginTop: 5 }}>Upload Photo</Text>
                  </View>
                )}
                {(props.authUser.profileData.uri !== '') && (
                  <Thumbnail large source={{ uri: props.authUser.profileData.uri }} />
                )}
              </TouchableOpacity>
              <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '700', fontSize: 20 }}> {`${props.authUser.profileData.firstName} ${props.authUser.profileData.lastName}`} </Text>
                {(bloodGroup === '') ? (null) : (<Text style={{ fontFamily: 'Lato-Regular', fontWeight: '100', fontSize: 18 }}> {`Blood Group: ${bloodGroup}`} </Text>)}
              </View>
            </View>
          </View>
          <View style={styles.profileDetailsCon}>
            <View style={{}}>
              <View style={{}}>
              </View>
              <View style={{ width: '100%' }}>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>First Name</Label>
                  <Input style={styles.inputStyle} value={firstName} onChangeText={(text) => setFirstName(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Last Name</Label>
                  <Input style={styles.inputStyle} value={lastName} onChangeText={(text) => setLastName(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Email</Label>
                  <Input style={styles.inputStyle} disabled value={email} onChangeText={(text) => setEmail(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Mobile number</Label>
                  <Input style={styles.inputStyle} value={mobileNumber} onChangeText={(num) => setMobileNumber(num)} />
                </Item>
                <View style={{ marginBottom: 10, borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}>
                  <Label style={styles.labelStyle}>Blood Group</Label>
                  <Picker
                    selectedValue={bloodGroup}
                    dropdownIconColor='#C34632'
                    style={{ color: '#B30E05', height: 50, width: 250, borderWidth: 0 }}
                    onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
                  >
                    <Picker.Item label="Select Blood Group" value="Select Blood Group" />
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="O-" value="O-" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="AB-" value="AB-" />
                  </Picker>
                </View>
                <View style={{ marginBottom: 12, borderBottomColor: '#f2f2f2', borderBottomWidth: 2 }}>
                  <Label style={styles.labelStyle}>Gender</Label>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <ListItem style={{ marginLeft: 7 }} selected={male ? true : false}>
                        <Left >
                          <Text style={{ color: '#B30E05' }}>Male</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={male} onPress={() => {
                            setMale(true);
                            setFemale(false);
                            setGender('Male');
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                    <View style={{ flex: 1 }}>
                      <ListItem selected={female ? true : false}>
                        <Left>
                          <Text style={{ color: '#B30E05' }}>Female</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={female} onPress={() => {
                            setMale(false);
                            setFemale(true);
                            setGender('Female');
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                  </View>
                </View>
                <View>
                  <Item floatingLabel style={{ marginBottom: 10 }}>
                    <Label style={styles.labelStyle} >Date of Birth</Label>
                    <Input style={styles.labelStyle} disabled value={dob} />
                  </Item>
                </View>
                <View style={{ marginTop: 2, marginBottom: 10 }}>
                  <Label style={styles.labelStyle} >Address</Label>
                  <Textarea style={{ paddingLeft: 8, fontFamily: 'Lato-Regular', fontSize: 18, color: '#B30E05' }} rowSpan={5} underline={true} placeholderTextColor='#B30E05' placeholder="Enter Your Address" value={address} onChangeText={(text) => setAddress(text)} />
                </View>
                <View style={{ marginBottom: 12, borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}>
                  <Label style={styles.labelStyle}>Location</Label>
                  <View >
                    <View style={{ flex: 1 }}>
                      <ListItem style={{ marginLeft: 7, width: '60%' }}>
                        <Left >
                          <Text style={{ color: '#B30E05' }}>Detect My Location</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={detectLocation} onPress={() => {
                            setDetectLocation(true);
                            setEnterLocation(false);
                            props.getCurrentLocation();
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                    <View style={{ flex: 1, marginBottom: 12 }}>
                      <ListItem style={{ marginLeft: 7, width: '60%' }}>
                        <Left>
                          <Text style={{ color: '#B30E05' }}>Enter Location</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={enterLocation} onPress={() => {
                            setEnterLocation(true);
                            setDetectLocation(false);
                            props.getUserPlace();
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                  </View>
                </View>
                <View>
                  {(props.authUser.profileData.location.latitude != '') && (
                    <MapView
                      provider={PROVIDER_GOOGLE}
                      style={styles.mapSnap}
                      region={{
                        latitude: props.authUser.profileData.location.latitude,
                        longitude: props.authUser.profileData.location.longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.04,
                      }}>
                      <Marker
                        coordinate={{
                          latitude: props.authUser.profileData.location.latitude,
                          longitude: props.authUser.profileData.location.longitude,
                        }} />
                    </MapView>
                  )}
                </View>
                <View>
                  <TouchableOpacity style={styles.btn} onPress={() => {
                    props.updateProfileData({
                      firstName: firstName,
                      lastName: lastName,
                      email: email,
                      dob: dob,
                      mobileNumber: mobileNumber,
                      bloodGroup: bloodGroup,
                      gender: gender,
                      address: address,
                      password: props.authUser.profileData.password,
                      uid: props.authUser.user,
                      uri: props.authUser.profileData.uri,
                      location: {
                        latitude: props.authUser.profileData.location.latitude,
                        longitude: props.authUser.profileData.location.longitude,
                      }
                    })
                    {
                      props.app.profileUpdateSuccess && (
                        Alert.alert(
                          'Congratulations!',
                          'Your profile has been updated',
                          [
                            {
                              text: 'Edit',
                              onPress: () => {
                                return null;
                              },
                            },
                            {
                              text: 'Go to Home',
                              onPress: () => {
                                props.navigation.replace('DrawerNav');
                              },
                            },
                          ],
                          { cancelable: false },
                        )
                      )
                    }
                  }}>
                    <Text style={styles.btnText}>Update Profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileSnapCon: {
    flex: 1,
    marginBottom: 4,
    padding: 15
  },
  profileDetailsCon: {
    flex: 3,
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
  labelStyle: {
    color: '#B30E05',
    paddingLeft: 5,
    fontFamily: 'Lato-Regular'
  },
  inputStyle: {
    color: '#B30E05',
    paddingLeft: 5,
    fontFamily: 'Lato-Regular'
  },
  btn: {
    marginTop: 10,
    width: '100%',
    height: 'auto',
    backgroundColor: '#8B0001',
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
  },
  mapSnap: {
    height: 140,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Lato-Regular',
  }
})

const mapStateToProps = (state) => ({
  app: state.app,
  authUser: state.authUser,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentLocation: () => dispatch(getCurrentLocation()),
  getUserPlace: () => dispatch(getUserPlace()),
  getProfileData: (uid) => dispatch(getProfileData(uid)),
  updateProfileData: (data) => dispatch(updateProfileData(data)),
  sendPhotoToDb: (uri) => dispatch(sendPhotoToDb(uri)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
