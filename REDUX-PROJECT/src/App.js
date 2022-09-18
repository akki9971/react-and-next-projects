import PostList from './PostList';
import './App.css';

function App(props) {
  return (
    <div className="App">

      <div style={{ backgroundColor: 'gray', width: '100%', height: 300, margin: 20 }}>
        <input type="button" value="+ Counter"
         style={{ backgroundColor: 'green', padding: 5, fontSize: 24 }} 
         onClick={props.onIncrementButtonHandler}
         />
        <input type="button" value="- Counter" 
        style={{ backgroundColor: 'red', padding: 5, marginLeft: 5, fontSize: 24 }} 
        onClick={props.onDecrementButtonHandler}
        />
      <br/>
      <h1>COUNTER VALUE IS: {props.counter}</h1>
      </div>

      <PostList />
    </div>
  );
}

export default App;
