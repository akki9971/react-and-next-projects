import React, { useState } from "react";


const ChildToParentDataFlow = (props) => {


    const onChangehandler = (event) => {

        props.getDataFromChild(event.target.value);

    }

    const onClickHandler = () => {
        props.getDataFromChild();
    }


    return (
        <>
            <h1>Child to Parent Data Flow</h1>
            <input type="text" onChange={onChangehandler} />
            <input type="button" value="Pass data to parent component" onClick={onClickHandler} />
        </>
    )
};


export default ChildToParentDataFlow;