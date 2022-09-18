import React from "react";

class ControllForm extends React.Component {

    constructor(props) {
        super(props);


        // Ref will used in Un-Controll Form
        // this.nameRef = React.createRef();
        // this.mobileRef = React.createRef();
        // this.emailRef = React.createRef();

        this.state = {
            name: '',
            mobile: '',
            email: ''
        };
    };


    // onFormSubmitHandler = (event) => {
    //     event.preventDefault();

    //     /// Un-Controll Form
    //     // When we used the Ref to get data from input form 
    //     // and are not manging any state and eventhandler etc
    //     const userName = this.nameRef.current.value;
    //     const mobile = this.mobileRef.current.value;
    //     const email = this.emailRef.current.value;

    //     console.log(`User Name is :${userName}, Mobile No is: ${mobile} and email id is: ${email}`);

    //     alert(`User Name is :${userName}, Mobile No is: ${mobile} and email id is: ${email}`);

    // };

    onNameChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    };

    onEmailChangeHandler = (event) => {
        this.setState({ email: event.target.value });
    };

    onMobileChangeHandler = (event) => {
        this.setState({ mobile: event.target.value });
    };

    onFormSubmitHandler = (event) => {
        event.preventDefault();

        console.log(`User Name is :${this.state.name}, Mobile No is: ${this.state.mobile} and email id is: ${this.state.email}`);

        alert(`User Name is :${this.state.name}, Mobile No is: ${this.state.mobile} and email id is: ${this.state.email}`);
    };
    render() {
        return (
            <div className="App">
                {/* Un-Controll Form */}
                {/* <form onSubmit={this.onFormSubmitHandler}>
                    <span>Name:</span>
                    <input type="text" ref={this.nameRef} />
                    <br />
                    <span>Mobile:</span>
                    <input type="text" ref={this.mobileRef} />
                    <br />
                    <span>Email:</span>
                    <input type="text" ref={this.emailRef} />

                    <br />
                    <button type="submit" value="Submit">Submit</button>
                </form> */}

                {/* Controll Form */}
                <form onSubmit={this.onFormSubmitHandler}>
                    <span>Name:</span>
                    <input type="text" value={this.state.name} onChange={this.onNameChangeHandler} />
                    <br />
                    <span>Mobile:</span>
                    <input type="text" value={this.state.mobile} onChange={this.onMobileChangeHandler} />
                    <br />
                    <span>Email:</span>
                    <input type="text" value={this.state.email} onChange={this.onEmailChangeHandler} />

                    <br />
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }

};

export default ControllForm;