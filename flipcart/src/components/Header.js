import React from 'react'
import { Link } from 'react-router-dom'

export const Header =()=>{

        return (
            <header className="container-fluid bg-primary" id="top-header">
            <nav className="navbar container navbar-expand-lg py-1 navbar-light text">
                <div className="container-fluid justify-content-evenly mx-4">
                    <Link className="navbar-brand text-white x-small fw-bold mr-1" to="/">
                        <div className="small mb_-1 text-decoration-italic fw-bolder letter-space-1">Shopping</div> Express <span className="text-warning">Plus</span><i className="fas fa-plus x-small  text-warning"></i>
                    </Link>
    
                    <form className="d-flex w-50 searchBox1 " >
                        <input className="form-control x-small py-1 rounded-0 border-white  pe-5" type="search"
                            placeholder="Search for Products, brands & more" aria-label="Search" />
                        <button className="btn btn-outline-success border-0 bg-white text-dark rounded-0"
                            type="submit"><i className="fas fa-search small text-primary"></i></button>
                    </form>
                    <a className="text-decoration-none text-white small fw-bold" href="/">
                        Login
                    </a>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white x-small fw-bold" href="/" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                    </div>
    
                    <Link className="navbar-brand small fw-bold text-white" to="/Cart"><i className="fas fa-shopping-cart me-2"></i>
                        Cart</Link>
                </div>
            </nav>
        </header>
            
        )
}

