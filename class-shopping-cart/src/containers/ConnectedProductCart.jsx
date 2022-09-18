import React from "react";
import { connect } from "react-redux";
import { ProductCart } from "../components";
import {onFetchProductDetailsRequest} from '../redux';

const ProductCartContainer = props => {



    if (props.isLoading) {
        return <div>Fetching data ......</div>
    } else {
        return (
            <ProductCart 
            cartList={props.addedItemList}
            />
        )
    }
};

const mapStateToProps = state => {
    const { cartStore } = state;
    return cartStore;
};


export const ConnectedProductCart = connect(mapStateToProps)(ProductCartContainer);




