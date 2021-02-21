import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';

const UserInfo = (props) => {
    // const [info, setInfo] = useState(() => {props.authUser.profileData})
    // console.log('UserInfo', props.authUser.profileData)
    // console.log('UserInfo', props.authUser.user)







    return (
        <View style={styles.profileHeader}>
            <View style={styles.profileHeaderPicCircle}>
                <Text style={{ fontSize: 25, color: '#fff' }}>Ponka</Text>
            </View>
                <View>
                    <Text style={{ color: '#fff' }}> Hello From UserInfo</Text>
                </View>
            
            {/* {props.authUser.user != null && (<Spinner style={styles.spinnerText} color='#fff' />)} */}
            <UserInfo />
        </View>
    )
}






const styles = StyleSheet.create({
    profileHeaderPicCircle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        color: 'white',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerText: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Lato-Regular',
      color: '#fff',
  }
});


const mapStateToProps = (state) => ({
    authUser: state.authUser,
    app: state.app
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);





{/* {props.app.donorsList.length == 0 && (<Spinner style={styles.btnText} color='#fff' />)} */}

                            {/* {props.app.donorsList.map((value, item) => {
                            console.log(props.app.donorsList)
                            return (
                                <Card key={item}>
                                    <CardItem style={styles.cardBorder}>
                                        <Body>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Text style={styles.textStyle} >Donor Name:</Text>
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
                                                        title={`Donor Name: ${value.firstName} ${value.lastName}`}
                                                        description={`Blood Group: ${value.bloodGroup}`}
                                                    />
                                                </MapView>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row' }} >
                                                <TouchableOpacity style={styles.btn}>
                                                    <Text style={styles.btnText}>Request Blood</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </Body>
                                    </CardItem>
                                </Card>
                            )
                        })} */}
