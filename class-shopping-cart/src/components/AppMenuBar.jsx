import React from 'react';
import { AppBar, Toolbar, Typography, ListItem, List } from '@material-ui/core'
// import { AppBar,Button,Toolbar } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography'
// import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Home } from './Home';
import { ConnectedProductCart } from '../containers/ConnectedProductCart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export const AppMenuBar = props => {

    return <Router>
        <AppBar position="static" color="secondary">
            <Toolbar >
                <TypoGraphy variant="title">CodeDex-Shopping App</TypoGraphy>

                <List component="nav">

                    <ListItem component="div">

                        <Link to="/" color="white">
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Home
                                </TypoGraphy>
                            </ListItemText>
                        </Link>

                        <ListItemText inset color="white">
                            <Link to="/cart" color="white">
                                <TypoGraphy color="inherit" variant="title">
                                    Cart
                                </TypoGraphy>
                            </Link>
                        </ListItemText>

                        <ListItemText inset color="white">
                            <Link to="/contact" color="white">
                                <TypoGraphy color="inherit" variant="title">
                                    Contact
                                </TypoGraphy>
                            </Link>
                        </ListItemText>
                    </ListItem >

                </List>
            </Toolbar>
        </AppBar>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={ConnectedProductCart} />
        </Switch>
    </Router>

}