import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchCartDetailsByUser, fetchAllProducts } from '../service';

export const ProductCart = props => {

    const onRemoveItemFromCart = id => {

    }
    useEffect(() => {
        console.log(props.ProductCart);
    },[])

    const generatecartView = <table style={{width:600, margin:30}}>
            <tr>
                <th> Name</th>
                <th> quantity</th>
                <th> Price</th>
                <th> Action</th>
            </tr>

            <tbody>
                {
                    props.cartList?.map((item) =>{
                        return (
                            <tr>
                            <td>{item.title}</td>
                            <td></td>
                            <td>{item.price}</td>
                            {/* <input type="button" value="Remove" onClick={() => { onRemoveItemFromCart(item.productId) }} /> */}
                        </tr>
                        )
                    })
                }
                <tr>
                    <td>Man Cotton Jacket</td>
                    <td>2</td>
                    <td>$200</td>
                    {/* <input type="button" value="Remove" onClick={() => { onRemoveItemFromCart(item.productId) }} /> */}
                </tr>
            </tbody>
            </table>
            {/* <strong>{productList?.find((product) => product.id === item.productId)?.title}</strong>
            <strong>{item.quantity}</strong>
            <strong>{productList?.find((product) => product.id === item.productId)?.price * item.quantity}</strong>
            <input type="button" value="X" onClick={() => { onRemoveItemFromCart(item.productId) }} /> */}
        
    

    return (
        <div className="App">
            <h1>Cart Details </h1>
            { generatecartView }
        </div>
    )
}