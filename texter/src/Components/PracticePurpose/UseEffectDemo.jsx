import React, {useState, useEffect} from 'react'

export default function UseEffectDemo() {
    const [innerWidth, setinnerWidth] = useState(window.innerWidth)
    const [innerHeight, setinnerHeight] = useState(window.innerHeight)
useEffect(() => {
    window.addEventListener('resize',onResizehandler)
}, [])
const onResizehandler = () =>{
    setinnerWidth(window.innerWidth)
    setinnerHeight(window.innerHeight)
}
    return (
        <>
           <h4 className="text-end">Your ScreenSize is : {innerWidth}px * {innerHeight}px</h4>
        </>
    )
}
