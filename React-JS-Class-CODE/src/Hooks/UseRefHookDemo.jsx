import React, { useState, useRef } from "react";

const UseRefHooksDemo = (props) => {

    // useState -: Used to manage state in Function Component
    const [userName, setUserName] = useState('');
    const [userState, setUserState] = useState('');

    const myRef = useRef();
    const myRefTextBox = useRef();


    const onColorClicked = (event) => {
myRef.current.style.color = "Red";
myRefTextBox.current.focus();
       
    }

    return (
        <div className="App" style={{ paddingTop: 30 }}>
            Name: <input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }} />
            <h1 ref={myRef}>{userName}</h1>
            <br />
            State
            <input ref={myRefTextBox} type="text" value={userState} onChange={(event) => { setUserState(event.target.value) }} />
            <h1>{userState}</h1>
            <input type="button" value="Change Color" onClick={onColorClicked}/>
        </div>
    );

};


export default UseRefHooksDemo;
