import Home from './Home';
import ClassComponentDemo from './classComponents/ClassComponentDemo';
import JSXDemo from './JSXDemo';
import ChildToParentDataFlow from './ChildToParentDataPassing';
import './App.css';
import { useState } from 'react';
import LifeCycleMethodsDemo from './classComponents/LifeCycleMethodsDemo';
import ConditinalRendring from './ConditionalRendring';
function App() {

  const [dataFromChildComponent, setDataFromChildComponent] = useState('');
  const userInfo = {
    id: 98,
    name: 'Rohan Kuman',
    city: 'NOIDA ABC'
  };


  const getDataFromChild = (dataFromChild) => {
    setDataFromChildComponent(dataFromChild);
  };


  return (
    <div className="App">
      <LifeCycleMethodsDemo count="1000" />
      <ConditinalRendring showSimpleView={true} />
      <h1>Data Comming From Child Component is:{dataFromChildComponent}</h1>
      <Home myCityName="New Delhi" />
      <ClassComponentDemo myCompanyName="Microsoft" />
      {/* <JSXDemo id={userInfo.id} name={userInfo.name} city={userInfo.city} /> */}

      <JSXDemo {...userInfo} />
      <ChildToParentDataFlow getDataFromChild={getDataFromChild} />
    </div>
  );
}

export default App;



// index -> App -> Home and ClassComponentDemo