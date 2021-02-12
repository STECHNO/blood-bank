const INITIAL_STATE = {
    toggle_login: true,
    toggle_user_panel: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_LOGIN":
            return ({
                ...state,
                toggle_login: false,
                toggle_user_panel: true,
                current_user: action.current_user,

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