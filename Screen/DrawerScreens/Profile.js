import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Alert, Button, Image } from 'react-native';
import { Icon, Item, Input, Label, Textarea, ListItem, Text, Radio, Right, Left, Card, CardItem, Body } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { connect } from 'react-redux';
import { pakhPalle } from '../../store/action';
import bloodDrop from '../../Image/b3.png';

const Profile = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Your Blood Group");
  const [showInput, setShowInput] = useState(true);
  const [detectLocation, setDetectLocation] = useState(false);
  const [enterLocation, setEnterLocation] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };



  // const { name, age, mobile, pakhPalle } = props;
  // console.log(name, age, mobile, pakhPalle)
  // console.log(props.name, props.age, props.mobile, props.pakhPalle)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView persistentScrollbar={true} >
        <View style={{ padding: 16 }}>
          <View style={styles.profileSnapCon}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25, paddingBottom: 25 }} >
              <View style={styles.icon}>
                <Icon type="FontAwesome" ios='user' android='user' />
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 20 }}>Name</Text>
                <Text style={{ fontWeight: '100', fontSize: 18 }}>Blood Group</Text>
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
                  <Input style={styles.inputStyle} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Last Name</Label>
                  <Input style={styles.inputStyle} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Email</Label>
                  <Input style={styles.inputStyle} disabled />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Mobile number</Label>
                  <Input style={styles.inputStyle} />
                </Item>
                <View style={{ marginBottom: 10, borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}>
                  <Label style={styles.labelStyle}>Blood Group</Label>


                  <Picker
                    selectedValue={selectedValue}
                    dropdownIconColor='#C34632'
                    style={{ color: '#B30E05', height: 50, width: 150, borderWidth: 0 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="O-" value="O-" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="AB-" value="AB-" />
                  </Picker>
                  {/* <Input style={styles.inputStyle} /> */}
                </View>

                <View style={{ marginBottom: 12, borderBottomColor: '#f2f2f2', borderBottomWidth: 2 }}>
                  <Label style={styles.labelStyle}>Gender</Label>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <ListItem style={{ marginLeft: 7 }}>
                        <Left >
                          <Text style={{ color: '#B30E05' }}>Male</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={male} onPress={() => {
                            setMale(true);
                            setFemale(false);
                            pakhPalle();
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                    <View style={{ flex: 1 }}>
                      <ListItem>
                        <Left>
                          <Text style={{ color: '#B30E05' }}>Female</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={female} onPress={() => {
                            setMale(false);
                            setFemale(true)
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                  </View>
                </View>
                <View>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      mode="date" value={new Date()}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                  <Item floatingLabel style={{ marginBottom: 10 }}>
                    <Label style={styles.labelStyle} >Date</Label>
                    <Input placeholder="Underline Textbox" placeholderTextColor='#B30E05' style={{ color: '#B30E05' }} value={date.toString().substr(4, 11)} onChangeText={showDatepicker} />
                  </Item>
                </View>
                <View style={{ marginTop: 2, marginBottom: 10 }}>
                  <Textarea style={{ paddingLeft: 8, fontFamily: 'Lato-Regular', fontSize: 18, color: '#B30E05' }} rowSpan={5} underline={true} placeholderTextColor='#B30E05' placeholder="Address" />
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
                            setShowInput(true);
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                    <View style={{ flex: 1 }}>
                      <ListItem style={{ marginLeft: 7, width: '60%' }}>
                        <Left>
                          <Text style={{ color: '#B30E05' }}>Enter Location</Text>
                        </Left>
                        <Right>
                          <Radio color={"#B30E05"} selectedColor={"#C34632"} selected={enterLocation} onPress={() => {
                            setEnterLocation(true);
                            setDetectLocation(false);
                            setShowInput(false);
                          }} />
                        </Right>
                      </ListItem>
                      <Item regular style={{ marginTop: 10, marginBottom: 12, borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}>
                        <Input style={{ paddingBottom: 19 }} placeholder='Enter Your location' placeholderTextColor='#bd908a' disabled={showInput} />
                      </Item>
                    </View>
                  </View>
                </View>



                <Card>
                  <CardItem style={styles.mapSnap}>
                      <View>
                      </View>
                  </CardItem>
                </Card>







                <View>
                  <TouchableOpacity style={styles.btn} onPress={() =>
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
                    )}>
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
      width: '100%',
      height: 140,
      padding: 0,
      backgroundColor: 'pink',
  },
})

const mapStateToProps = (state) => ({
  name: state.app.name,
  age: state.app.age,
  mobile: state.app.mobile,
})

const mapDispatchToProps = (dispatch) => ({
  ad_categories: (data) => dispatch(ad_categories(data)),
  pakhPalle: () => dispatch(),

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
