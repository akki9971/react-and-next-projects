import React from "react";
import {Grid} from '@material-ui/core'
import {ProductList} from './ProductList';
import {APP_NAME} from '../constants';
import {ConnectedProductList} from '../containers/ConnectedProductList';
import '../App.css';
export const Home = props =>{

    return(
        <div className="App">
            <h1>{APP_NAME}</h1>
            {/* <ProductList /> */}
            <ConnectedProductList />
        </div>
    )
}