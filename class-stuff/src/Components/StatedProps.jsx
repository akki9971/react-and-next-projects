import React, { Component } from 'react'

export class StatedProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInNcr : false,
            name: ''
        };
    }
    static getDerivedStateFromProps(props, state){
        const inNcr =( props.city=== "noida" || props.city=== "gurugram" || props.city=== "delhi" || props.city=== "faridabad" ) ? true : false;
        return ( {
            isInNcr:inNcr,
            name:props.name
        })
    }
    render() {
        return (
            <>
                <h1>
                    {
                         <h3>User having name {this.state.name} is from {this.state.isInNcr? this.props.city:'user is from outside'
                            
                        }</h3>
                    }
                </h1>
            </>
        )
    }
}
