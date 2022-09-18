import React, { useRef } from 'react'

export default function StateDemo() {

    const myRef = useRef();
    return (
        <div className="my-5">
            <h1 ref={myRef}>Hello Sir</h1>
            <button onMouseDown={() => { 
                let myStyle = `border:2px solid black;
                               background-color:grey;color:green;
                               text-align:center`
                myRef.current.style=myStyle;             
            }}
            onMouseUp={()=>{
                myRef.current.style=" ";
            }}
            >Click Me !!</button>
            {/* <button onClick={() => {    
                myRef.current.style=` `;             
            }}>Click Me again!!</button> */}
        </div>
    )
}
