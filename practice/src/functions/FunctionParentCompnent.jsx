import React, { useRef, useState } from 'react';
import ForwardedRef from './ForwardedRef';
import PortalCreater from './PortalCreater';
import UseMemoDemo from './UseMemoDemo';

const FunctionParentCompnent = () => {
    const myRef = useRef('');
    const users = ['Akib', 'Javed', 'Amjad', 'akki', 'Ali', 'Rakib'];
    const [names , setNames] = useState(users)
    // const filteredUser = []; 

    const changeHandler = (data) => {
        let bc = users.filter(user => user.includes(data))
        setNames(bc)
        // let cd = users.splice(0, 6).concat(bc)
        // filteredUser.concat(bc)
        // console.log(bc, data,names, cd, users.splice(0, 6));
    }

    const onClickHandler =() =>{
        console.log(myRef.current);
        myRef.current.style.border = '5px solid black'
        console.log(myRef.current);
    }
    const clicked =() =>{
        console.log(names);
    }
    return (
        <>
            <input type="text" onChange={(e) => changeHandler(e.target.value)} />
            <button onClick={clicked}>search</button>
            {names && names.length <= 0 ? '<p>no data available</p>' : names.map(a => {
                return <li>{a}</li>
            })}
            <PortalCreater />
            <br />
            <br />
            <button onClick={onClickHandler}>Change Style</button>
            <ForwardedRef myref={myRef} statement="This is functions example of forward ref" />
            <UseMemoDemo />
        </>
    )
}

export default FunctionParentCompnent
