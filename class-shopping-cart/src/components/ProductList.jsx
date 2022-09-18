import React from "react";
import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../service';
import { ProductCard } from './ProductCard';
import { ProductDetails } from './ProductDetails';
import { Grid, Modal } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import '../App.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export const ProductList = props => {
  //  const [productList, setProductList] = useState();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(undefined);


    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

    // useEffect(() => {

    //     // fetch products
    //     fetchAllProducts().then((data) => {
    //         console.log(data);
    //         setProductList(data);
    //     })

    // }, []);

    // const onAddToCartHandler = id => {
    //     setSelectedId(id);
       
    // };

    /**
     * @summary - View Product Details Button Click handler
     * @param {Number} id - Selected Product Id 
     */
    const onProductViewDetailsHandler = id => {
        props.onProductViewDetailsHandler && props.onProductViewDetailsHandler(id);
        setIsModalOpen(true);
    };

    const ProductModal = <Modal
        open={isModalOpen}
        onClose={handleClose}
    >
        <div style={style}>
            <ProductDetails
                {...props.selectedProductDetails}
            />
        </div>
    </Modal>
    return (
        <>
            {isModalOpen && ProductModal}
            <Grid container spacing={40} justifyContent="center">
                {props.productList?.map((product) => <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    onProductViewDetails={onProductViewDetailsHandler}
                    onAddToCart={props.onAddToCartHandler}
                />)}

            </Grid>
        </>
    );
}