import React from "react";

const ConditinalRendring = (props) => {

   // if (props.showSimpleView == true) {
        return <>
            <h1>DEMO FOR CNDITIONAL RENDRING !!</h1>
            {props.showSimpleView && <input type="button" value="Show/Hide" />}
        </>
    //}
    // else {
    //     return <h1>DEMO FOR CNDITIONAL RENDRING !!</h1>
    // }
}

export default ConditinalRendring;