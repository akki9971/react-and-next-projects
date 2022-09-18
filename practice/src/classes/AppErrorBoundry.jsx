import React, { Component } from 'react'

export class AppErrorBoundry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isError: true
        }
    }

    componentDidCatch(error){
        console.log(error);
    }

    static getDerivedStateFromError(error){ 
        console.log(error);
        if(error){
            return false
        }
        return true
        
    }
    render() {
        return (
            <>
              {
                  this.state.isError? this.props.children: 'there is an error'
              }  
            </>
        )
    }
}

export default AppErrorBoundry
