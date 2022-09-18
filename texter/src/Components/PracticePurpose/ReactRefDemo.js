import React, { Component } from 'react'

export default class ReactRefDemo extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef('');
        this.state ={
            myName:'akib',
            mySurname:'ali'
            }
    }
    render() {
        return (
            <div className="mb-5">
                <h1 ref={this.myRef}>{this.state.myName}</h1>
                <button onClick={()=>{
                    this.setState({myName:'Aaquib Ali'});
                    this.myRef.current.style="color:red; background-color: skyblue; border: 5px solid green; font-size:40px"
                }}>Click Me !!</button>
            
                {/* <h1>{this.state.mySurname}</h1> */}
                <button onClick={()=>{
                    this.setState({myName:'akib'})
                    this.myRef.current.style=""

                    }}>Click Me again !!</button>
            
            </div>
        )
    }
}
