import { INCREMENT_COUNTER, DECREMENT_COUNTER, FETCH_ALL_POST_SUCCESS } from "./actions";

const DEFAULT_APP_STATE = {
    ReduxCounter: 0,
    postListRedux:[]
}

export function rootReducer(state = DEFAULT_APP_STATE, action) {

    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                ReduxCounter: state.ReduxCounter + 1
            }

        case DECREMENT_COUNTER:
            return {
                ...state,
                ReduxCounter: state.ReduxCounter - 1
            }
        case FETCH_ALL_POST_SUCCESS:
            console.log('FETCH_ALL_POST_SUCCESS')
            return{
                ...state,
                postListRedux: action.payload
            }

        default:
            return state;
    }
}