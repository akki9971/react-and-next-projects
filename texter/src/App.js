import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from './Components/NavMenu';
import ClassHome from './Components/ClassHome';
import FunctionHome from './Components/FunctionHome';
import Alert from './Components/Alert';
import About from './Components/About'

function App() {
  const [mode, setmode] = useState('light');
  const [btnColor , setBtnColor] = useState('primary')
  const Textref = React.createRef('');
  const [modeText, setmodeText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }

  let body = document.body.style;

  const togglewhitemode = () => {
    console.log(body);
    setmode('light');
    setBtnColor('warning')
    body.backgroundColor = '#fff';
    body.color = '#000';
    Textref.current.style.backgroundColor = '#fff';
    showAlert("LightMode Enabled", "success");

  }
  const toggleredmode = () => {
    body.backgroundColor = '#7D1935';
    setmode('light');
    setBtnColor('danger');
    body.color = '#EEB76B';
    Textref.current.style.backgroundColor = '#E0C097';
    showAlert("RedMode Enabled", "success")

  }
  const togglegrnmode = () => {
    setmode('light');
    setBtnColor('success');
    body.backgroundColor = '#01937C';
    body.color = '#A5E1AD';
    Textref.current.style.backgroundColor = '#CDF2CA';
    showAlert("Green DarkMode Enabled", "success")

  }
  
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      setBtnColor('warning');
      setmodeText('Enable LightMode');
      body.backgroundColor = '#334756';
      body.color = '#fff';
      Textref.current.style.backgroundColor = '#96BAFF';
      showAlert("DarkMode Enabled", "success")
    } else {
      setmode('light')
      setmodeText('Enable DarkMode');
      setBtnColor('primary');
      body.backgroundColor = '#fff';
      body.color = '#000';
      Textref.current.style.backgroundColor = '#fff';
      showAlert("LightMode Enabled", "success")
    }
  }
  return (
    <Router>
      
        <NavMenu title="Texter" about="aboutTexter" modetext={modeText} mode={mode} togglewhitemode={togglewhitemode} toggleredmode={toggleredmode} togglegrnmode={togglegrnmode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Switch>
          
          <Route path="/home">
            <ClassHome myRef={Textref} buttons={btnColor} heading="You can try to play with your text" showAlert={showAlert}  />
          </Route>
          <Route path="/about">
            <About myRef={Textref}/>
          </Route>
          <Route path="/">
            <FunctionHome myRef={Textref} buttons={btnColor} heading="You can try to play with your text" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>

        {/* <input type="text" ref={customRef}/>
        <input type="button" value="focus" onClick={()=>{
            customRef.current.focus();
            customRef.current.style.border='5px solid blue'
        }} /> */}
      
    </Router>
  );
}

export default App;
