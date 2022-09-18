import react from "react";
import React from "react";

class LifeCycleMethodsDemo extends React.Component {

    constructor(props) {
        super(props);
        console.log(' LifeCycleMethodsDemo --- constructor');
        this.state = {
            userName: 'User 1',
            shouldShow: true
        }
    }
    // It executes Before rendring
    static getDerivedStateFromProps(props, state) {
        console.log(' LifeCycleMethodsDemo --- getDerivedStateFromProps');
        return {
            userName: props.count >= 100 ? 'User 2' : 'User 1'
        }
    }

    // Executes only once After Component First Rendring 
    componentDidMount() {
        console.log(' LifeCycleMethodsDemo --- componentDidMount');
        // API Calling 
        // Load data from API on Page Load (Component)
        // Register your Events Like Windows Events you can register here
        // 3rd party library register

    }


    getSnapshotBeforeUpdate() {
        console.log('LifeCycleMethodsDemo --- getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('LifeCycleMethodsDemo --- componentDidUpdate');
    }

    render() {
        console.log(' LifeCycleMethodsDemo --- render method ');
        return (
            <>
                {this.state.shouldShow &&
                    <div>
                        <h1 >Life Cycle Methods DEMO</h1>
                        <h1>{this.state.userName}</h1>
                        <input type="text" onChange={(event) => { this.setState({ userName: event.target.value }) }} />
                    </div>
                }
                <input type="button" value="Show/Hide"
                    onClick={() => { this.setState({ shouldShow:!this.state.shouldShow}) }}
                />
                <br />

            </>
        )
    }
}

export default LifeCycleMethodsDemo;

