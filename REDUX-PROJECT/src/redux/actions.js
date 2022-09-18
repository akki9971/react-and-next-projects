export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';



export const onCounterIncrement = () => {
    return {
        type: INCREMENT_COUNTER,
        payload: null
    }
}

export const onCounterDecrement = () => {
    return {
        type: DECREMENT_COUNTER,
        payload: null
    }
}


export const FETCH_ALL_POST_REQUEST = 'FETCH_ALL_POST_REQUEST';
export const FETCH_ALL_POST_SUCCESS = 'FETCH_ALL_POST_SUCCESS';

export const onFetchAllPostRequest = ()=>{
    return {
        type:FETCH_ALL_POST_REQUEST,
        payload: null
    }
}


export const onFetchAllPostSuccess = (postList)=>{
    return {
        type:FETCH_ALL_POST_SUCCESS,
        payload: postList
    }
}
