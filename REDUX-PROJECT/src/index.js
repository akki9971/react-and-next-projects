import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './ConnectedApp';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'; // Provider used to connect React App with Redux
import {appStore} from './redux/appStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
