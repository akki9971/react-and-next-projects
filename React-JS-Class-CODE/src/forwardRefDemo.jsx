import React, { useState } from "react";

const ForwardRefDemo = React.forwardRef((props, ref) => {

    const [userName, setUserName] = useState('');
    return (
        <div>

            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <input type="button" value="Submit" onClick={() =>alert('Button Clicked !!')} />
            <br/>
            <h1 ref={ref}>{userName}</h1>

            <div>
                Children Props
                {props.children}
            </div>
        </div>
    )
});

export default ForwardRefDemo;



// const MyComponent = React.forwardRef((props, ref) =>{

// })