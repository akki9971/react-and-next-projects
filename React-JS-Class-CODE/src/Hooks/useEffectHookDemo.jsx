import React,{useEffect, useState} from "react";


const UseEffectHookDemo = (props) =>{
const [mobileNo, setMobileNo] = useState();
const [id, setId] = useState(0);
   
useEffect(()=>{
        console.log('useEffect-1 Executes Every Time....');
    }); // Executes after each rendring of component (After First rendringf nad after Each re-rendring of component)

    useEffect(()=>{
        console.log('useEffect-2 Executes Every Time....');
    },[]); // When empty array will be pass as a dependency in useEffect, it will executes only once
    // Means it execites only one time after first rendring of component
    // it same as ComponentDidMount


    useEffect(()=>{
console.log('EXECUTES only when ID will Changed !!');
// 
    },[id]);// It executes only when Id value will be changed
    // It same like COmponentDidUpdate

    return(
        <div>
            <h1>-------------UseEffect DEMO--------------</h1>
             Mobile No:
             <input type="text" value={mobileNo} onChange={(event) => setMobileNo(event.target.value)} />
             <br />
             ID:
             <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
             <br/>
             <br />
             <h1>-------------END OF UseEffect DEMO--------------</h1>
        </div>
    )

};

export default UseEffectHookDemo;