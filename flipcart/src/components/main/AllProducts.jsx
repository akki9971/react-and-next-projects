import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AllProducts = ({ products,onViewDetailClick , onAddToCartClick}) => {
    
    return (
        <div>
            <h3 className="text-center my-3 text-primary">Our Products</h3>
            <div className="container productsComp">
                <div className="row">
                    {
                        products?.map((product,index) => {
                            return <div className="col-md-4 my-2" key={index}>
                                <div className="card" >
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.slice(0,50)}</h5>
                                        <p className="card-text">Price: ${product.price}  |  Ratings: {product.rating.rate}</p>
                                        <div className="buttons">
                                            {/* <button  className="btn btn-primary " onClick={()=>{onAddToCartClick(product)}} >add to cart</button> */}
                                            <Link to="/ProductDetail"  className="btn btn-primary " onClick={()=>{onAddToCartClick(product)}} >add to cart</Link>
                                            
                                            <button className="btn btn-primary"  onClick={()=>{onViewDetailClick(product)}} >View details</button>
                                            {/* <Link to="/" className="btn btn-primary"  onClick={()=>{onViewDetailClick(product)}} >View details</Link> */}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
