import './App.css';
import {useState, useEffect} from 'react'
import { EmployeeData } from './Components/EmployeeData';
import Sample from './Sample.json'
// import axios from 'axios'

function App() {
  const [Employees, setEmployees] = useState([]);
  // const [users, setUsers]= useState(sample.users);
  // console.log(sample.Employees)

  useEffect(() => {
    const gettingApi = () => {
      // fetch('https://jsonplaceholder.typicode.com/users')
      // // fetch('./sample.js')
      //   .then((resp) => resp.json())
      //   .then((data) => {
      //     setEmployees(data)
      //     // console.log(Employees);
      //   }).catch((err) => {
      //     alert(err + " somethimg went wrong")
      //     console.log(err + 'an error occured');
      //   });
      // console.log(Employees);

      // let fetching = fetch('./sample.json'); ;
      // let data = fetching.json() ;
      // // let data = JSON.parse(data)
      // console.log(data);

      
        fetch('Sample.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setEmployees(myJson)
          });
      
    }

    gettingApi()
  },[]);
  return (
    <div className="App">
      <h1 className="text-primary">Employees List</h1>
      <EmployeeData Employees={Employees} />
    </div>
  )
}

export default App;
