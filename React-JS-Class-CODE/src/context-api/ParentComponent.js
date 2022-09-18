import React from "react";
import Child1 from './Child1';
import myContext from "./myContext";
import colorContext from './colorContext';

class ParentComponent extends React.Component {

    constructor(props) {
        super(props);
        // State
        this.state = {
            userInputValue: '',
            userId:100,
            city:'New Delhi',
            color:''
        };
    }

    onColorSelection = (selectedColor) =>{
this.setState({color:selectedColor});
//alert(selectedColor);
    }

    render() {
        return (
            <myContext.Provider value={this.state}>
                <div className="App">
                    <h1>Parent Component </h1>
                    <h2>Color Selected By Child-3 Component is :{this.state.color} </h2>
                    <input type="text" value={this.state.userInputValue } onChange={(event) => this.setState({userInputValue:event.target.value}) } />
                  <colorContext.Provider value={{Red:'red', Green:'green', Orange:'orange', onColorSelection:this.onColorSelection}}>
                    <Child1 />
                    </colorContext.Provider>
                </div>
            </myContext.Provider>
        )
    }
};

export default ParentComponent;