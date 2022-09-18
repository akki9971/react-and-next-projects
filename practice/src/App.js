import React from 'react'

import './App.css';
import ClassParentComponent from './classes/ClassParentComponent';
import FunctionParentCompnent from './functions/FunctionParentCompnent';

function App() {
  return (
    <div className="App">
      <ClassParentComponent />
      <FunctionParentCompnent />

    </div>
  );
}

export default App;
