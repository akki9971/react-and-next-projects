import React, { Component } from 'react'
import { ChildToParentDataflow } from './ChildToParentDataflow'

export class Child2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsTrue:false,
            name:''
        }
    }
    static getDerivedStateFromProps(props, state) {
        const UpdatedCity = (props.city==='noida' || props.city==='New Delhi' || props.city==='Faridabad' || props.city==='Gurugram')? true : false;
        return {
            IsTrue:UpdatedCity
        }
    }
    shouldComponentUpdate() {
        if (this.state.name.length>3 && this.state.name.length<10) {
            return true
        }
        return false
    }
    
    render() {
        console.log('Classes Component Child 2');
        return (
            <div style={{border:'3px double blue'}}>
            <h1>Classes Component Child 2</h1>
            {
                this.state.IsTrue?<h2>User is from {this.props.city}</h2>: <h1>user is from outside</h1>
            }
            <p>
                <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} />
                {this.state.name}
            </p>
              <ChildToParentDataflow />  
            </div>
        )
    }
}

export default Child2
