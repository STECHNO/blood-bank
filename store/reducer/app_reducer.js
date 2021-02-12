const INITIAL_STATE = {
    name: 'saleheen',
    age: '30',
    mobile: 'samsung',
}

export default (state = INITIAL_STATE, action) => {
switch(action.type){
    case "SETDATA" :
        return({
            ...state,
            show_user_profile_div: !state.show_user_profile_div,
        }) 
}
    
    
return state;
}