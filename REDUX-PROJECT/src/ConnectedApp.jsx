import React from "react";
import App from './App';
import { connect } from 'react-redux';
import {onCounterIncrement, onCounterDecrement} from './redux/actions';

function ConnectedApp(props) {

    console.log(props.ReduxCounter);

    const onIncrementClickHandler = () => {
        props.onIncrement && props.onIncrement();
    }

    const onDecrementClickHandler = () => {
        props.onDerement && props.onDerement();
    }

    return (<App
        counter={props.ReduxCounter}
        onIncrementButtonHandler={onIncrementClickHandler}
        onDecrementButtonHandler={onDecrementClickHandler}
    />);

}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncrement: () => dispatch(onCounterIncrement()),
        onDerement: () => dispatch(onCounterDecrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);