import React from "react";
import myContext from "./myContext";
import colorContext from "./colorContext";

class Child3 extends React.Component {

    componentDidMount(){
       const contextValue = this.context;
       contextValue.onColorSelection('Green');
    }
    render() {
        return (
            <div>
                <colorContext.Consumer>
                    {
                        (color) => <h1 style={{ backgroundColor: color.Orange }}>Child-3 Component </h1>
                    }
                </colorContext.Consumer>

                <h2>{this.props.userInput}</h2>
                <myContext.Consumer>
                    {
                        (value) => <h1> {` userId is : ${value.userId}- Value1 is: ${value.userInputValue} - and value2 is: ${value.city}`} </h1>
                    }
                </myContext.Consumer>
            </div>
        )
    }
};

Child3.contextType = colorContext;
export default Child3;
