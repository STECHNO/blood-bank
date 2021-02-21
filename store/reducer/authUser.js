const INITIAL_STATE = {
    user: null,
    spinner: false,
    profileData: {
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
        uri: '',
        location: {
            latitude: '',
            longitude: '',
        }
    },
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER":
            return ({
                ...state,
                user: action.payload,
            })
    }
    switch (action.type) {
        case "SPINNER":
            return ({
                ...state,
                spinner: action.payload,
            })
    }
    switch (action.type) {
        case "RETRIEVE_PROFILE_DATA":
            return ({
                ...state,
                profileData: action.payload,
            })
    }
    switch (action.type) {
        case "PHOTO_URL":
            return ({
                ...state,
                profileData: {
                    ...state.profileData,
                    uri: state.profileData.uri = action.payload,
                }
            })
    }
    switch (action.type) {
        case "GEOLOCATION":
            console.log('authUser ka location', action.payload)
            return ({
                ...state,
                profileData: {
                    ...state.profileData,
                    location: {
                        ...state.profileData.location,
                        latitude: state.profileData.location.latitude = action.payload.latitude,
                        longitude: state.profileData.location.longitude = action.payload.longitude,
                    }
                }
            })
    }
    switch (action.type) {
        case "PLACES":
            return ({
                ...state,
                profileData: {
                    ...state.profileData,
                    location: {
                        ...state.profileData.location,
                        latitude: state.profileData.location.latitude = action.payload.latitude,
                        longitude: state.profileData.location.longitude = action.payload.longitude,
                    }
                }
            })
    }
    switch (action.type) {
        case "LOGOUT":
            return ({
                ...state,
                toggle_user_panel: false,
                toggle_login: true,
            })
    }
    return state;
}