import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Alert, Button, mage } from 'react-native';
import { Icon, Item, Input, Label, Textarea, } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

const Profile = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  console.log(date);

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
                  <Input placeholder="Underline Textbox" placeholderTextColor='B30E05' style={{color: '#B30E05'}} value={date.toString().substr(4, 11)} onChangeText={showDatepicker}/>
                  {/* <Input style={styles.inputStyle} onChangeText={showDatepicker} /> */}
                </Item>
                </View>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Blood Group</Label>
                  <Input style={styles.inputStyle} />
                </Item>
                <View style={{ marginTop: 2, marginBottom: 10 }}>
                  <Textarea style={{ paddingLeft: 8, fontFamily: 'Lato-Regular', fontSize: 18, color: '#B30E05' }} rowSpan={5} underline={true} placeholderTextColor='#B30E05' placeholder="Address" />
                </View>
                <View>
                  <Text>Location</Text>
                </View>
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
  }
})

export default Profile;
