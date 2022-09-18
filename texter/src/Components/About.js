import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Hello User</h3>
                <h5>This is about Text Utilities and it helps you to convert your text from lowercase to uppercase, uppercase to lowercase, remove extra spaces.</h5>
                   <h5> It has word counter , character counter , line counter. </h5>
                   <h5> It offers you to know how much time it get to read it out </h5>
                   <div style={{width:'1px', height:'1px'}} ref={this.props.myRef}></div>
            </div>
        )
    }
}
