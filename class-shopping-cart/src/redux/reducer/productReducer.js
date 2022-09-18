
import { FETCH_ALL_PRODUCTS_REQUEST, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_PRODUCT_BY_ID_REQUEST } from '../actions';

const INITIAL_STATE = {
    productList: [],
    productDetails: {},
    isLoading: false,

}

export const productReducer = (state = INITIAL_STATE, action) => {

    console.log('--------REDUCER ----------');
    console.log(action);
    console.log(state);
    console.log('--------END REDUCER ----------');

    switch (action.type) {
        case FETCH_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                productList: action.payload,
                isLoading: false,
            }
        case FETCH_PRODUCT_BY_ID_REQUEST:
            return{
                ...state,
                productDetails: state.productList?.find((item) => item.id === action.payload)
            }
        default:
            return state;
    }

}