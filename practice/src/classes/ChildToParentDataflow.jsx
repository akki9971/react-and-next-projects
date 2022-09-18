import React, { Component } from 'react'
import { MyContext } from './ClassParentComponent'

export class ChildToParentDataflow extends Component {
    constructor(props) {
        super(props)
        this.state={
            data:''
        }
    }
//     onChangeHandler=(e) => {
//         this.setState({data:e.target.value})
//         this.props.passData(this.state.data)
//      }
//     onClickhandler = () =>{
//         this.setState({data:this.state.data})
//         // this.props.passData(this.state.data)
//     }
    render() {
        console.log('Child To Parent Data flow');
        // 

        return (
            <div style={{border: '5px dotted brown', margin:10}}>
            <h3>Grand Child of Class Component</h3>
                <h1>Child {this.state.data}</h1>
                {/* <input type="text" onChange={this.onChangeHandler} /> */}
                <input type="text" onChange={(e)=>{this.setState({data:e.target.value})}} />

                <MyContext.Consumer>
                    {(data)=>{
                        // console.log(data);
                        // return <h5>{data}</h5>
                        return <button onClick={()=>{data(this.state.data)}}>Click to Pass data from child to Great Grand Parent</button>

                    }}
                </MyContext.Consumer>
            </div>
        )
    }
}

