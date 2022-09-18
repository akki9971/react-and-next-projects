import React, { Component } from 'react'

export class CompDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth})
        this.setState({ windowHeight: window.innerHeight })
    }
    render() {
        return (
            <h4 className="text-end">
                Your ScreenSize is : {this.state.windowWidth}px * {this.state.windowHeight}px
            </h4>
        )
    }
}

export default CompDidMount
