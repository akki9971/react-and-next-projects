import React from 'react';
import { Link } from 'react-router-dom';
import './custom.css';

export const Navbar = (props) => {
    return (
        // <div className="container" style={{borderBottom:'5px solid rgba(0,0,0,0.3)',marginBottom:10}}>
        <div className="container-fluid" style={{ boxShadow: '0 1px 5px 5px rgba(0,0,0,0.3)', marginBottom: 10 }}>
            <Link to="/" >
                <div className="card navbarcards">
                    <img src="/images/allCategory.png" className="card-img-top" alt="..." />

                    <h6 className="btn">All Products</h6>

                </div>
            </Link>
            <div className="card navbarcards">
                <img src="/images/fashionCategory.png" className="card-img-top" alt="..." />
                <Link to="/" className="btn">Fashion</Link>
            </div>
            <div className="card navbarcards">
                <img src="/images/electronicsCategory.png" className="card-img-top" alt="..." />
                <Link to="/" className="btn">Electronics</Link>

            </div>
            <div className="card navbarcards">
                <img src="/images/jewelleryCategory.jpg" className="card-img-top" alt="..." />
                <Link to="/" className="btn">Jewellery</Link>

            </div>
        </div>
    )
}
