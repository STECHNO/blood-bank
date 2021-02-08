import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import bloodDrop from '../Image/b3.png';
import { Item, Input, Label } from 'native-base';

let signUp = () => {
    alert('Congratulations');
}

function RegisterScreen({ navigation }) {
    return (
        <LinearGradient colors={['#B30E05', '#C34632']} style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.drop} source={bloodDrop} />
                </View>
                <View style={{ flex: 3, width: '100%' }}>
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
                        <Input style={styles.inputStyle} />
                    </Item>
                    <Item floatingLabel style={{ marginBottom: 10 }}>
                        <Label style={styles.labelStyle}>Password</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} />
                    </Item>
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={() => { signUp, navigation.push('LoginScreen') }}>
                            <Text style={styles.btnText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 7 }} >
                        <View >
                            <Text style={{ color: '#fff', fontSize: 13, fontFamily: 'Lato-Regular'}} onPress={() => navigation.push('LoginScreen')}>I'm already a member</Text>
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
        height: 'auto',
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
export default RegisterScreen;