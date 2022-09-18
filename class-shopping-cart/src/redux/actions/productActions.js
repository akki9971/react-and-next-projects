
export const FETCH_ALL_PRODUCTS_REQUEST = 'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';

export const FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';
export const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';


export const onFetchProductListRequest = () =>{
    return{
        type:FETCH_ALL_PRODUCTS_REQUEST,
        payload:null
    }
};

export const onFetchProductListSuccess = (productList) =>{
    return{
        type:FETCH_ALL_PRODUCTS_SUCCESS,
        payload:productList
    }
};

export const onFetchProductDetailsRequest = (id) =>{
    return{
        type:FETCH_PRODUCT_BY_ID_REQUEST,
        payload:id
    }
};

export const onFetchProductDetailsSuccess = (productDetails) =>{
    return{
        type:FETCH_PRODUCT_BY_ID_SUCCESS,
        payload:productDetails
    }
};