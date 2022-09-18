import React from "react";


// step 2: extends from React.Component
class ClassComponentDemo extends React.Component {

  constructor(props){
      // Must have super(props)
        super(props); // we are passing props to react.Component class

        // State in React JS 
        this.state ={
                useMessage: '',
                tempVariable: 'temp value'
        };
        
            // this.tempVariable =  'temp value';

       this.SimpleEventHandler = this.SimpleEventHandler.bind(this);

       // Ref -: 
       this.myRef = React.createRef();
       this.myTextBoxRef  = React.createRef();
  }

  onUserMessageChanged = (event) =>{

const value = event.target.value;
// Update value in State using setState method

this.setState({useMessage : value});

  }

  OnClickHandler = () =>{
      alert('OnClickHandler');
     // this.tempVariable = "this.tempVariable 123456789";
this.setState({tempVariable:  "this.tempVariable 123456789"});
      //alert( this.tempVariable)
  }


  SimpleEventHandler(params) {
    alert('SimpleEventHandler')
    this.setState({  useMessage: 'INDIA'})
  }

  onChangeColorButtonClick = () =>{
     // document.getElementById('h1Color').style.color = 'red';
     this.myRef.current.style.color = 'red';
     this.myTextBoxRef.current.focus();
  };
    // Step 3: use render function 
    // class component mush have render method

    render() {

        /// when want to use multiple elemnet/ html element in component
        // Always wrap in side <div> 
        return (
            <div>
                <h1>This is my Class Component Demo </h1>
                <h2>User Information - Props value is - {this.props.myCompanyName}</h2>
                <br />
                <span>User Message </span>
                <input ref={this.myTextBoxRef} type="text" value={this.state.useMessage} onChange={this.onUserMessageChanged}/>
                <input type="button" value="click me" onClick={this.OnClickHandler} />

                <input type="button" value="Simple Event Binding" onClick={this.SimpleEventHandler} />
                <br />
                {this.state.useMessage}
                <br />
                {this.state.tempVariable }
                <input type="button" value="Change Color" onClick={this.onChangeColorButtonClick} />
                <h1 ref={this.myRef}>Color will be change on Button Click </h1>
            </div>
        );
    }

};


export default ClassComponentDemo;