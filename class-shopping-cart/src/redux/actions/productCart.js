export const ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART';
export const REMOVE_PRODUCT_FROM_CART = 'ADD_PRODUCT_IN_CART';

export const onAddToCartAction = (product) =>{
    return{
        type:ADD_PRODUCT_IN_CART,
        payload:product
    }
}

export const onremoveFromCartAction = (id) =>{
    return{
        type:REMOVE_PRODUCT_FROM_CART,
        payload:id
    }
}