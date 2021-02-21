const INITIAL_STATE = {
    latitude: '',
    longitude: '',
    profileUpdateSuccess: false,
    donorsList: [],
    recipientsList: [],
    test: true,
    drLocations: [],
}

export default (state = INITIAL_STATE, action) => {

    // switch (action.type) {
    //     case "GEOLOCATION":
    //         return ({
    //             ...state,
    //             latitude: action.payload.latitude,
    //             longitude: action.payload.longitude,
    //         })
    // }


    // switch (action.type) {
    //     case "PLACES":
    //         return ({
    //             ...state,
    //             latitude: action.payload.latitude,
    //             longitude: action.payload.longitude,
    //         })
    // }

    switch (action.type) {
        case "PROFILE_UPDATE_SUCCESS":
            return ({
                ...state,
                profileUpdateSuccess: action.payload,
            })
    }
    switch (action.type) {
        case "DONORS_LIST":
            return ({
                ...state,
                donorsList: action.payload,
            })
    }

    switch (action.type) {
        case "RECIPIENTS_LIST":
            return ({
                ...state,
                recipientsList: action.payload,
            })
    }

    switch (action.type) {
        case 'DONORS_RECIPIENTS_LOCATIONS':
            return ({
                ...state,
                drLocations: action.payload,
            })
    }


    return state;

}