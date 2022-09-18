import React, { useState, useMemo } from 'react'

const UseMemoDemo = () => {
    const [count, setCount] = useState(1)
    const [item, setItem] = useState(1)

    const ClickCounter = () => {
        console.log('ClickCounter');
        setCount(count + 2)
    }
    const ItemCounter = () => {
        console.log('ItemCounter');
        setItem(item * 2)
    }
    const MemoDemo = useMemo(()=> {
        console.log('MemoDemo counter');
        return (
            <>
                <span>{item}</span>
            </>
        )
    }, [item])

    return (
        <>
            <h1> React HOOK useMemo </h1>
                <h5>
                    <img src="./images/logo192.png" alt="logo192" />
                </h5>
            <h1>Count is : {count}   Count Multiplier is :
                {MemoDemo} 
                <br/>
                Item is : {item}   </h1>
            <input type="button" onClick={ClickCounter} value="Count + " />
            <input type="button" onClick={ItemCounter} value="Item + " />
            <button type="button" onClick={()=>{
                localStorage.setItem("MyCount", count)
                localStorage.setItem("MyItem", item)
            }}>Click to store to local storage</button>
            <button type="button" onClick={()=>{
                localStorage.clear()
            }}>Clear local storage</button>
        </>
    )
}

export default React.memo(UseMemoDemo)
