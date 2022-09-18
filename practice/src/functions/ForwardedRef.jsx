import React from 'react'

const ForwardedRef = (props) => {
    return (
        <div>
            <h1 ref={props.myref}>{props.statement}</h1>
        </div>
    )
}

export default ForwardedRef
