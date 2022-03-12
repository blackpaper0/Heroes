import {types} from '../types'



const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            console.log(action.type);
            return {
                ...action.payload,
                logged: true,
            }
        
        case types.logout:
            console.log(action.type);

            return {
                logged: false,
            }
        default:
            return state
    }
}

export default authReducer;