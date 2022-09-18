import React, { useState } from 'react'

export function DarkMode() {
    const [mycss, setMycss] = useState({
        color:'green',
        backgroundColor:'grey'
    })
    return (
        <div>
            <h2 style={mycss}>I will be changed by CSS</h2>
            <button onClick={()=>{
                    setMycss({color:'blue',backgroundColor:'lightgray'})
                }}>Click Me</button>
        </div>
    )
}

