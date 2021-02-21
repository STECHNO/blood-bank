import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import bloodDrop from '../Image/b3.png';
import { Item, Input, Label, Icon, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { signUp } from '../store/action';
import auth from '@react-native-firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';



function RegisterScreen(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [initializing, setInitializing] = useState(true);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(selectedDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const onAuthStateChanged = (user) => {
        if (initializing) setInitializing(false);
        if ((user != null) && (props.authUser.user != null)) {
            props.navigation.push('DrawerNav');
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null

    return (
        <LinearGradient colors={['#B30E05', '#C34632']} style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.drop} source={bloodDrop} />
                </View>
                <View style={{ flex: 3, width: '100%' }}>
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
                        <Input style={styles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
                    </Item>
                    <View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                mode="date" value={new Date()}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <Item floatingLabel style={{ marginBottom: 10 }}>
                            <Label style={styles.labelStyle} >Date of Birth</Label>
                            <Input placeholder="Underline Textbox" placeholderTextColor='#fff' style={{ color: '#fff' }} value={date.toLocaleDateString()} onChangeText={showDatepicker} />
                        </Item>
                    </View>
                    <Item floatingLabel style={{ marginBottom: 10 }}>
                        <Label style={styles.labelStyle}>Password</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} value={password} onChangeText={(pass) => setPassword(pass)} />
                    </Item>
                    <Item floatingLabel style={{ marginBottom: 10 }}>
                        <Label style={styles.labelStyle}>Confirm Password</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} value={confirmPassword} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />
                        {(password != '') && (password === confirmPassword) && <Icon style={{ fontSize: 20, color: '#fff' }} name='checkmark-circle' />}

                    </Item>
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            if (firstName === '') {
                                alert('enter First Name');
                            }
                            else if (lastName === '') {
                                alert('enter Last Name');
                            }
                            else if (email === '') {
                                alert('enter email');
                            }
                            else if (password === '') {
                                alert('enter password');
                            }
                            else if (confirmPassword === undefined) {
                                alert('enter confirm password');
                            }
                            else if (email != '' && password === confirmPassword) {
                                props.signUp(email, password, firstName, lastName, date);
                            }
                        }}>
                            {!props.authUser.spinner && (<Text style={styles.btnText}>Sign Up</Text>)}
                            {props.authUser.spinner && (<Spinner style={styles.btnText} color='red' />)}
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 7 }} >
                        <View >
                            <Text style={{ color: '#fff', fontSize: 13, fontFamily: 'Lato-Regular' }} onPress={() => props.navigation.push('Auth')}>I'm already a member</Text>
                        </View>
                    </View>
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
    signUp: (email, password, firstName, lastName, date) => dispatch(signUp(email, password, firstName, lastName, date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);