import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon, Item, Input, Text, Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux';
import bloodDrop from '../../../Image/b3.png';

const Donors = (props) => {
    const [ResName, setResName] = useState('Arbaz Khan');
    const [bloodType, setBloodType] = useState('A+');
    const [ResLocation, setResLocation] = useState('Karachi, Pakistan');
    const [contactNum, setContactNum] = useState('0300-1234567');
    const [gender, setGender] = useState('Male');

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', }}>
            <ScrollView persistentScrollbar={true} >
                <View style={styles.mainContainer}>
                    <View style={{ flex: 1, width: '90%' }}>
                        <Item regular style={{ marginTop: 10, marginBottom: 1, borderBottomWidth: 1 }}>
                            <Item>
                                <Icon name="ios-search" />
                                <Input style={{ fontSize : 13}} placeholder="Search Blood Donors" />
                                <Icon name="md-medkit" />
                            </Item>
                        </Item>
                        <View style={styles.profileHeaderLine} />
                    </View>
                    <View style={styles.cardStyle}>
                        <Card>
                            <CardItem style={styles.cardBorder}>
                                <Body>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={styles.textStyle} >Donor Name:</Text>
                                        <Text style={styles.textStyleSub} >{ResName}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={styles.textStyle} >Blood Type: </Text>
                                        <Text style={styles.textStyleSub} >{bloodType}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={styles.textStyle} >Gender: </Text>
                                        <Text style={styles.textStyleSub} >{gender}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={styles.textStyle} >Contact Number: </Text>
                                        <Text style={styles.textStyleSub} >{contactNum}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={styles.textStyle}>Donor's Location:</Text>
                                        <Text style={styles.textStyleSub} >{ResLocation}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                        <Text style={styles.textStyle}>Map Location:</Text>
                                    </View>
                                    <View style={styles.mapSnap}>
                                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image style={styles.drop} source={bloodDrop} />
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }} >
                                        <TouchableOpacity style={styles.btn}>
                                            <Text style={styles.btnText}>Request Blood</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    profileHeaderLine: {
        height: 2,
        marginHorizontal: 5,
        backgroundColor: '#e2e2e2',
        marginTop: 13,
    },
    cardStyle: {
        flex: 1,
        width: '90%',
        margin: 10,
    },
    cardBorder: {
        borderBottomColor: '#bd908a',
        borderTopColor: '#bd908a',
        borderRightColor: '#bd908a',
        borderLeftColor: '#bd908a',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    mapSnap: {
        flex: 1,
        width: '100%',
        height: 140,
        marginTop: 10,
        backgroundColor: 'pink',
    },
    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#B30E05',
        flex: 1,
        fontWeight: '700',
        marginBottom: 3,
    },
    textStyleSub: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#C34632',
        flex: 1,
        fontWeight: '100',
    },
    drop: {
        width: 50,
        height: 70,
    },
    btn: {
        marginTop: 10,
        width: '100%',
        height: 'auto',
        backgroundColor: '#C34632',
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
    name: state.app.name,
    age: state.app.age,
    mobile: state.app.mobile,
})

const mapDispatchToProps = (dispatch) => ({
    ad_categories: (data) => dispatch(ad_categories(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Donors);
