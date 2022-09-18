import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HooksDemo from '../src/Hooks/HooksDemo';
//import LifeCycleMethodsImplementationsDemo from './classComponents/LifeCycleMethodsImplementationsDemo';
import ParentComponent from './context-api/ParentComponent';
ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
