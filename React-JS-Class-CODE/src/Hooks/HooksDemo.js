import React, { useState } from "react";
import UseRefHooksDemo from './UseRefHookDemo';
import UseEffectHookDemo from './useEffectHookDemo';

const HooksDemo = (props) => {

    // useState -: Used to manage state in Function Component
    const [userName, setUserName] = useState('');
    const [userState, setUserState] = useState('');

    const [userInfo, setUserInfo] = useState({
        id: 0,
        name: 'Default',
        city: 'Delhi'
    });

    const onUserChanged = (event) => {

        const inputValue = event.target.value;
        const targetField = event.target.name;

        setUserInfo({ ...userInfo, [targetField]: inputValue });
    }
    // const onUserNameChanged = (event) => {
    //     setUserInfo({ ...userInfo, name: event.target.value });

    // }

    // const onUserCityChanged = (event) => {
    //     setUserInfo({ ...userInfo, city: event.target.value });

    // }

    return (
        <div className="App" style={{ paddingTop: 30 }}>
            <UseEffectHookDemo />
            Name: <input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }} />
            <h1>{userName}</h1>
            <br />
            State
            <input type="text" value={userState} onChange={(event) => { setUserState(event.target.value) }} />
            <h1>{userState}</h1>
            <br />
            <br />
            <br />
            <h1>manging Object State in useState</h1>
            ID: <input name="id" type="text" value={userInfo.id} onChange={onUserChanged} />
            <h1>{userInfo.id}</h1>
            <br />
            Name
            <input type="text" name="name" value={userInfo.name} onChange={onUserChanged} />
            <h1>{userInfo.name}</h1>
            City:<input type="text" name="city" value={userInfo.city} onChange={onUserChanged} />
            <h1>{userInfo.city}</h1>
            <h1>USE REF DEMO.............................</h1>
            <UseRefHooksDemo />
        </div>
    );

};


export default HooksDemo;
