import React, { Component } from 'react'
import Child1 from './Child1';
export const MyContext = React.createContext('default')
export default class ClassParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            name: 'john Doe',
            changedata: (input)=>{
                this.setState({data:input})
            }
        };
        this.myref=React.createRef();
        
    }


    render() {
        console.log('Class Parent Component');
        
        // console.log(this.myref);
        return (
            <div style={{border: '1px solid black'}}>
            <h1 ref={this.myref}>Parent Class Component </h1>
            <h2>Future Data coming from Child : {this.state.data}</h2>
            <MyContext.Provider value={this.state.changedata}>
              <Child1  />  
            </MyContext.Provider>
            </div>
        )
    }
}
