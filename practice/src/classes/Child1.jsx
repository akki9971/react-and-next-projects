import React, { PureComponent } from 'react'
import AppErrorBoundry from './AppErrorBoundry';
import Child2 from './Child2'

export class Child1 extends PureComponent {
    constructor(){
        super()
        this.state={
            name:[]
        }
    }
    render() {
        console.log('Classses Component Child 1');
        return (
            <div style={{border: '1px solid #000', padding:20}} >
                <h2>Child 1 Compoment</h2>

                <AppErrorBoundry>
                    <Child2 city={'Gurugram'} />
                </AppErrorBoundry>
            </div>
        )
    }
}

export default Child1
