import Geolocation from '@react-native-community/geolocation';
import RNGooglePlaces from 'react-native-google-places';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { Alert } from 'react-native';


const signIn = (email, password) => {
    return (dispatch) => {
        if (email === '') {
            alert('enter email');
        }
        else if (password === '') {
            alert('enter password');
        }
        else {
            dispatch({
                type: 'SPINNER',
                payload: true,
            });
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Signed in!');
                    auth().onAuthStateChanged(user => {
                        if (user) {
                            console.log('sign in auth user', user._user.uid)
                            dispatch({
                                type: 'USER',
                                payload: user._user.uid,
                            })
                        }
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        alert('That email address is already in use! \n Please Enter Another Email');
                        dispatch({
                            type: 'SPINNER',
                            payload: false,
                        });
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        alert('That email address is invalid! \n Please Enter Another Email');
                        dispatch({
                            type: 'SPINNER',
                            payload: false,
                        });
                    }
                    console.error(error);
                    alert(error);
                    dispatch({
                        type: 'SPINNER',
                        payload: false,
                    });
                });
        }


    }
}

const signUp = (email, password, firstName, lastName, date) => {
    return (dispatch) => {
        dispatch({
            type: 'SPINNER',
            payload: true,
        });
        auth()
            .createUserWithEmailAndPassword(email, password, `${firstName} ${lastName}`)
            .then((result) => {
                result.user.updateProfile({
                    displayName: `${firstName} ${lastName}`
                })
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    alert(error.code);
                    dispatch({
                        type: 'SPINNER',
                        payload: false,
                    });
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert(error.code);
                }
                console.error(error);
            });
        auth().onAuthStateChanged(user => {
            if (user) {
                dispatch({
                    type: 'USER',
                    payload: user._user.uid,
                })
                console.log('signup', user._user.uid);
                database().ref('/').child(`users/${user._user.uid}`).set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    mobileNumber: '',
                    bloodGroup: '',
                    gender: '',
                    dob: date.toLocaleDateString(),
                    address: '',
                    password: password,
                    uid: user._user.uid,
                    uri: '',
                    location: {
                        latitude: '',
                        longitude: '',
                    }
                });
            }
        })


    }
}


const getProfileData = (uid) => {
    return (dispatch) => {
        database().ref(`/users/${uid}`).on('value', snapshot => {
            dispatch({
                type: 'RETRIEVE_PROFILE_DATA',
                payload: snapshot.val(),
            })
        });
    }
}


const updateProfileData = (data) => {
    return (dispatch) => {
        database().ref(`/users/${data.uid}`).update(data).then(() =>
            dispatch({
                type: 'PROFILE_UPDATE_SUCCESS',
                payload: true,
            }));
    }
}


const getCurrentLocation = () => {
    return (dispatch) => {
        Geolocation.getCurrentPosition(info => {
            console.log(info.coords.latitude, info.coords.longitude)
            dispatch({
                type: 'GEOLOCATION',
                payload: {
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude,
                }
            })
        });

    }
}


const getUserPlace = () => {
    return (dispatch) => {
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                dispatch({
                    type: 'PLACES',
                    payload: {
                        latitude: place.location.latitude,
                        longitude: place.location.longitude,
                    }
                })
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    }
}

const signOut = () => {
    return (dispatch) => {
        auth()
            .signOut()
            .then(() =>
                console.log('User signed out!'),
                dispatch({
                    type: 'USER',
                    payload: null,
                }),
                dispatch({
                    type: 'RETRIEVE_PROFILE_DATA',
                    payload: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        mobileNumber: '',
                        bloodGroup: '',
                        gender: '',
                        dob: '',
                        address: '',
                        uid: '',
                        uri: null,
                        location: {
                            latitude: '',
                            longitude: '',
                        }
                    },
                })
            );
        dispatch({
            type: 'SPINNER',
            payload: false,
        });
    }
}

const donateBlood = (data) => {
    return (dispatch) => {
        database().ref('/').child(`bloodDonorsList/${data.uid}`).set(data);
        Alert.alert(
            'Congratulations',
            'Now you are in the list of Donors',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              }
            ],
            { cancelable: false },
          )
    }
}

const requestBlood = (data) => {
    return (dispatch) => {
        database().ref('/').child(`bloodRecipientsList/${data.uid}`).set(data);
        Alert.alert(
            'Congratulations',
            'Now you are in the list of Recipients',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              }
            ],
            { cancelable: false },
          )
    }
}

const getBloodDonorsList = () => {
    return (dispatch) => {
        database().ref('/bloodDonorsList').on('value', snapshot => {
            let donors = snapshot.val();
            let donorsList = [];
            for (let item in donors) {
                donorsList.push({
                    address: donors[item].address,
                    bloodGroup: donors[item].bloodGroup,
                    email: donors[item].email,
                    firstName: donors[item].firstName,
                    gender: donors[item].gender,
                    lastName: donors[item].lastName,
                    location: donors[item].location,
                    mobileNumber: donors[item].mobileNumber,
                    uid: donors[item].uid,
                    uri: donors[item].uri,
                });
            }
            dispatch({
                type: 'DONORS_LIST',
                payload: donorsList,
            })
        });
    }
}

const getBloodRecipientsList = () => {
    return (dispatch) => {
        database().ref('/bloodRecipientsList').on('value', snapshot => {
            let recipients = snapshot.val();
            let recipientsList = [];
            for (let item in recipients) {
                recipientsList.push({
                    address: recipients[item].address,
                    bloodGroup: recipients[item].bloodGroup,
                    email: recipients[item].email,
                    firstName: recipients[item].firstName,
                    gender: recipients[item].gender,
                    lastName: recipients[item].lastName,
                    location: recipients[item].location,
                    mobileNumber: recipients[item].mobileNumber,
                    uid: recipients[item].uid,
                    uri: recipients[item].uri,
                });
            }
            dispatch({
                type: 'RECIPIENTS_LIST',
                payload: recipientsList,
            })
        });
    }
}


const sendPhotoToDb = (uri) => {
    return (dispatch) => {
        const reference = storage().ref(`images/${uri}`);
        async () => {
            await reference.putFile(uri);
        }
        const task = reference.putFile(uri);
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });
        task.then(() => {
            console.log('Image uploaded to the bucket!');
            storage().ref(`images/${uri}`).getDownloadURL().then((downloadURL) => {
                dispatch({
                    type: 'PHOTO_URL',
                    payload: downloadURL,
                })
            });
        });
    }
}


const getDRLocations = () => {
    return (dispatch) => {
        let drLocations = [];
        database().ref('/bloodDonorsList').on('value', snapshot => {
            let donors = snapshot.val();
            for (let item in donors) {
                drLocations.push({
                    address: donors[item].address,
                    bloodGroup: donors[item].bloodGroup,
                    email: donors[item].email,
                    firstName: donors[item].firstName,
                    gender: donors[item].gender,
                    lastName: donors[item].lastName,
                    location: donors[item].location,
                    mobileNumber: donors[item].mobileNumber,
                    uid: donors[item].uid,
                    uri: donors[item].uri,
                    status: 'Donor'
                });
            }
        });
        database().ref('/bloodRecipientsList').on('value', snapshot => {
            let recipients = snapshot.val();
            for (let item in recipients) {
                drLocations.push({
                    address: recipients[item].address,
                    bloodGroup: recipients[item].bloodGroup,
                    email: recipients[item].email,
                    firstName: recipients[item].firstName,
                    gender: recipients[item].gender,
                    lastName: recipients[item].lastName,
                    location: recipients[item].location,
                    mobileNumber: recipients[item].mobileNumber,
                    uid: recipients[item].uid,
                    uri: recipients[item].uri,
                    status: 'Recipient',
                });
            }
        });
        dispatch({
            type: 'DONORS_RECIPIENTS_LOCATIONS',
            payload: drLocations,
        })
    }
}


export {
    signIn,
    signUp,
    getProfileData,
    updateProfileData,
    getCurrentLocation,
    getUserPlace,
    signOut,
    donateBlood,
    requestBlood,
    getBloodDonorsList,
    getBloodRecipientsList,
    sendPhotoToDb,
    getDRLocations,
}