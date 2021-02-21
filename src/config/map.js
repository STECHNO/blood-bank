import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Geocoder from 'react-native-geocoding';
Geocoder.init("AIzaSyCDGxou9Za63BV5hGvedB5swwWqhBbbNq4", { language: "en" });

const Map = (props) => {
    const [address, setAddress] = useState('');
    // console.log('map ka ', props.location)
    
    Geocoder.from(props.location)
        .then(json => {
            var addressComponent = json.results[0].address_components[0];
            // console.log(addressComponent);
            setAddress(addressComponent.long_name);
        })
        .catch(error => {
            setAddress(error.message);
            // console.warn(error)
        });


    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.textStyle}>Donor's Location:</Text>
            <Text style={styles.textStyleSub} >{address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default Map;
