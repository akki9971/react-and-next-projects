
import {ADD_PRODUCT_IN_CART, REMOVE_PRODUCT_FROM_CART} from '../actions';

const INITIAL_CART_STATE ={
    addedItemList:[]
}
export const productCartReducer = (state = INITIAL_CART_STATE,action) =>{

    console.log('productCartReducer');
    console.log(state);

    switch(action.type){
        case ADD_PRODUCT_IN_CART:
            return{
                ...state,
                addedItemList: [...state.addedItemList, action.payload]
            }
        case REMOVE_PRODUCT_FROM_CART:
            return{
                ...state,
                addedItemList: state.addedItemList?.filter((item) => item.id !== action.payload)
            }
            default:
                return state;
    }
}