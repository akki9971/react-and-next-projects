import React, { Component } from 'react'

export class User extends Component {
    
    componentWillUnmount(){
        alert("Click OK to delete User.")
    }
        render() {
        return (
            <div>
                <ul>
                    <li>Hi this is user interface</li>
                    <li>Hi this is user interface</li>
                    <li>Hi this is user interface</li>
                    <li>Hi this is user interface</li>
                </ul>
            </div>
        )
    }
}
