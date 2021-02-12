// import firebase from '../../config/firebase';

const login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let current_user = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid
                }

                if (user) {
                    dispatch({
                        type: 'TOGGLE_LOGIN',
                        current_user: current_user,
                    })
                }


            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let current_user = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`users/${current_user.uid}`).set(current_user)

            } else {
                dispatch({
                    type: 'TOGGLE_LOGIN',
                    current_user: '',
                })
            }
        })
    }
}

const pakhPalle = () => {
    console.log('Saleheen Noor');
    return(dispatch) => {
    }
}



export {
    login,
    pakhPalle,
}