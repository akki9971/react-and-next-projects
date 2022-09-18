import React, { Component } from 'react'
import {User} from './User';

export class LifeCycleImp extends Component {
    constructor(props){
        super(props);
        this.state = {
            // windowidth : window.innerWidth,
            // windowHeight : window.innerHeight,
            show: true,
            Delete:true,
            btnText:'Delete User'
        };
       
        
    }
    render() {
        return (
            <>
            {/* <div>
                <h1>life cycle methods implementation</h1>
                <h3>Window Width : {this.state.windowidth}</h3>
                <h3>Window Height : {this.state.windowHeight}</h3>
            </div> */}

                <h2 style={this.state}>I am Permanent</h2>
                {
                    this.state.show? <h2>I will be show or hide</h2>:<h6><i>i am removed</i></h6>
                }
                <button onClick={()=>{
                    this.setState({show:!this.state.show})
                }}>Click Me</button>

                {
                    this.state.Delete?
                    <User />:null
                }

                <button onClick={()=>{
                    this.setState({Delete:false});
                    this.setState({btnText:'User Deleted'})
                }}>{this.state.btnText}</button>
            </>
        )
    }
}
