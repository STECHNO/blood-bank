import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Icon, Item, Input, Text, Card, CardItem, Body, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { getBloodRecipientsList } from '../../../store/action';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import LocationName from '../../../src/config/map'

const Recipients = (props) => {

    const openDialScreen = (number) => {
        if (Platform.OS === 'ios') {
          number = `telprompt:${number}`;
        } else {
          number = `tel:${number}`;
        }
        Linking.openURL(number);
      };

    useEffect(() => {
        props.getBloodRecipientsList();
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, width: '100%', }}>
            <ScrollView persistentScrollbar={true} >
                <View style={styles.mainContainer}>
                    <View style={{ flex: 1, width: '90%' }}>
                        {/* <Item regular style={{ marginTop: 10, marginBottom: 1, borderBottomWidth: 1 }}>
                            <Item>
                                <Icon name="ios-search" />
                                <Input style={{ fontSize: 13 }} placeholder="Search Recipients By Your Blood Group" />
                                <Icon name="md-medkit" />
                            </Item>
                        </Item> */}
                        <View style={styles.profileHeaderLine} />
                    </View>
                    <View style={styles.cardStyle}>
                        {(props.app.recipientsList.length == 0) ? (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Spinner style={{ fontSize: 50 }} color='#B30E05' /></View>)
                            :
                            (props.app.recipientsList.map((value, item) => {
                                return (
                                    <Card key={item}>
                                        <CardItem style={styles.cardBorder}>
                                            <Body>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Text style={styles.textStyle} >Recipient Name:</Text>
                                                    <Text style={styles.textStyleSub} >{`${value.firstName} ${value.lastName}`}</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Text style={styles.textStyle} >Blood Type: </Text>
                                                    <Text style={styles.textStyleSub} >{value.bloodGroup}</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Text style={styles.textStyle} >Gender: </Text>
                                                    <Text style={styles.textStyleSub} >{value.gender}</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Text style={styles.textStyle} >Contact Number: </Text>
                                                    <Text style={styles.textStyleSub} >{value.mobileNumber}</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <Text style={styles.textStyle} >Email: </Text>
                                                    <Text style={styles.textStyleSub} >{value.email}</Text>
                                                </View>
                                                <LocationName location={value.location} />
                                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                                    <Text style={styles.textStyle}>Map Location:</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                                                    <MapView
                                                        provider={PROVIDER_GOOGLE}
                                                        style={styles.mapSnap}
                                                        region={{
                                                            latitude: value.location.latitude,
                                                            longitude: value.location.longitude,
                                                            latitudeDelta: 0.02,
                                                            longitudeDelta: 0.04,
                                                        }}>
                                                        <Marker
                                                            coordinate={{
                                                                latitude: value.location.latitude,
                                                                longitude: value.location.longitude,
                                                            }}
                                                            title={`Recipient Name: ${value.firstName} ${value.lastName}`}
                                                            description={`Blood Group: ${value.bloodGroup}`}
                                                        />
                                                    </MapView>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }} >
                                                    <TouchableOpacity style={styles.btn} onPress={() => openDialScreen(value.mobileNumber)} >
                                                        <Text style={styles.btnText}>Donate Blood</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                )
                            }))}
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
    authUser: state.authUser,
    app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
    getBloodRecipientsList: () => dispatch(getBloodRecipientsList()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Recipients);