import {DECREAMENT_COUNTER, INCREAMENT_COUNTER} from './Action'
export const INITIAL_STATE = {
    ReduxCounter:0
}

export const RootReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case DECREAMENT_COUNTER:
           return {
               ...state,
               ReduxCounter:state.ReduxCounter - 1
           }
        case INCREAMENT_COUNTER:
           return {
               ...state,
               ReduxCounter:state.ReduxCounter + 5
           }
    
        default:
            return state
    }
}