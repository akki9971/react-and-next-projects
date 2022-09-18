import './App.css';
import { LifeCycleImp, DarkMode, StatedProps } from './Components'

function App() {
  return (
    <div className="App">
      <LifeCycleImp />
      <DarkMode />
      <StatedProps city="delhi" name="Azmat" />
    </div>
  );
}

export default App;
