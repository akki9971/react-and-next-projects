import React from 'react'
import './App.css'

const App = (props) => {
  return (
    <div style={{textAlign: 'center' }}>
      <h2>Hello Welcome to React redux</h2>
        <h5>Inreament/Decreament using redux</h5>
      <div>
        <input type="button" value="dec" onClick={props.ondecClickHandler}/>

        <input style={{padding:'2px 10px'}} disabled={true} value={`Value is : ${props.Counter}`} />

        <input type="button" value="inc" onClick={props.onIncClickHandler}/>
      </div>
    </div>
  )
}

export default App
