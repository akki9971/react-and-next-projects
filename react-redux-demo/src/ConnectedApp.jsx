import React from 'react'
import App from './App'
import {connect} from 'react-redux'
import {IncreamentCounter, DecreamentCounter} from './redux/Action'

function ConnectedApp(props) {
    const counter = props.ReduxCounter;
    function onIncClickHandler(){
        // console.log('+ clicked');
        props.onIncreament && props.onIncreament()
    }
    function ondecClickHandler(){
        // console.log('- clicked');
        props.onDecreament && props.onDecreament()
    }
    return (
        <>
        <App Counter={counter}
         onIncClickHandler={onIncClickHandler}
         ondecClickHandler={ondecClickHandler} />
        <h1>Connected App</h1>
        </>
    )
}

const mapStateToProps = (state)=>{
    return state
}
const mapDispatchToProps = (dispatch)=>{
    return{
    onDecreament: ()=>dispatch(DecreamentCounter()),
    onIncreament:()=>dispatch(IncreamentCounter())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
