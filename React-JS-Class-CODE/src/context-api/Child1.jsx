import React from "react";
import Child2 from './Child2';

class Child1 extends React.Component{

    render(){
        return(
            <div>
                <h1>Child-1 Component </h1>
                <Child2/>
            </div>
        )
    }
};

export default Child1;