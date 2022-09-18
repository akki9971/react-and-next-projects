import React from "react";
import { connect } from "react-redux";
import { ProductList } from "../components";
import { onFetchProductDetailsRequest, onAddToCartAction } from '../redux';

const ProductListContainer = props => {


    const onAddToCartHandler = id => {
alert(id)
        const addProduct = props?.productList?.find((item) => item.id === id);
        
        if(addProduct !== undefined){
            props.onAddItemToCart && props.onAddItemToCart(addProduct);
        }

    };

    /**
     * @summary - View Product Details Button Click handler
     * @param {Number} id - Selected Product Id 
     */
    const onProductViewDetailsHandler = id => {

        props.onFetchSelectedProductDetails && props.onFetchSelectedProductDetails(id);
        // setSelectedId(id);
        // const result = productList?.find(item => item.id == id);
        // alert(result?.title)
        // setSelectedProduct(result)
        // setIsModalOpen(true);
    };

    if (props.isLoading) {
        return <div>Fetching data ......</div>
    } else {
        return (
            <ProductList
                productList={props?.productList}
                onProductViewDetailsHandler={onProductViewDetailsHandler}
                onAddToCartHandler={onAddToCartHandler}
                selectedProductDetails={props?.productDetails}
            />
        )
    }
};

const mapStateToProps = state => {
    const { productStore } = state;
    return productStore;
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSelectedProductDetails: (id) => dispatch(onFetchProductDetailsRequest(id)),
        onAddItemToCart: (product) => dispatch(onAddToCartAction(product))
    }
}

export const ConnectedProductList = connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);




