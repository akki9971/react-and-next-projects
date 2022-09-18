import React from "react";
import Child3 from './Child3';
import myContext from "./myContext";

class Child2 extends React.Component{

    render(){
        return(
            <div>
                <h1>Child-2 Component </h1>
                <myContext.Consumer>
                    {
                        (value) => <h1> {value.city} </h1>
                    }
                    </myContext.Consumer>
                <Child3 />
            </div>
        )
    }
};

export default Child2;