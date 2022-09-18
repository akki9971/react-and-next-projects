import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Home, ProductCart} from '../components';

export const NavBar = props =>{

    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart Details</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={ProductCart} />
                </Switch>
            </div>
        </Router>
    )
}