import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, CardItem, Body, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { getDRLocations } from '../../../store/action';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const DRMap = (props) => {

    const [dr, setDr] = useState(props.app.drLocations);


    useEffect(() => {
        props.getDRLocations();
    }, [])


    return (
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapSnap}
                initialRegion={{
                    latitude: 24.882791,
                    longitude: 67.13508019999999,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.4,
                }}>

                {(dr.length == 0) ? (null)
                    :
                    (dr.map((value, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: value.location.latitude,
                                    longitude: value.location.longitude,
                                }}
                                title={`Donor: ${value.firstName} ${value.lastName}`}
                                description={`Blood Group: ${value.bloodGroup}, Mobile Number: ${value.mobileNumber}`}
                            />
                        )
                    }))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapSnap: {
        width: '100%',
        height: '100%',
    },
})

const mapStateToProps = (state) => ({
    app: state.app,
    authUser: state.authUser,
})

const mapDispatchToProps = (dispatch) => ({
    getDRLocations: () => dispatch(getDRLocations(),)
})

export default connect(mapStateToProps, mapDispatchToProps)(DRMap);