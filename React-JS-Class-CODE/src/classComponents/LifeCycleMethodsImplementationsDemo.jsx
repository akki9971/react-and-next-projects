import React from "react";
import ForwardRefDemo from '../forwardRefDemo';
import ControllForm from './ControlledForm';



const baseuserUrl = 'http://fakeapi.jsonparseronline.com/users';
class LifeCycleMethodsImplementationsDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            bgColor: '',
            userList: [],
            selectedUserId: 0,
            selectedUserDetails: {}
        };

        this.childMessageRef = React.createRef();
    };

    onWindoResizeHandler = (event) => {
        this.setState({ windowWidth: window.innerWidth });
        this.setState({ windowHeight: window.innerHeight });

        if (window.innerWidth < 600) {
            this.setState({ bgColor: 'red' });
        } else {
            this.setState({ bgColor: '' });
        }
    };

    getAllUsers = () => {
        fetch(`${baseuserUrl}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ userList: data });
                // generate options
            })
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindoResizeHandler);
        this.getAllUsers();
    };

    dropDownOnChangehandler = (event) => {
        this.setState({ selectedUserId: event.target.id });
        if(event.target.value > 0){
           const selectedUser = this.state.userList?.find(user => user.id == event.target.value);
            this.setState({selectedUserDetails:selectedUser});
        };

        const currentColor =  this.childMessageRef.current.style.color;
        this.childMessageRef.current.style.color = currentColor == 'red' ? 'black' : 'red';
    };

    componentWillUnmount(){
        // Remove all register events
        // Close open files
        // do other cleaning activity
        window.removeEventListener('resize', this.onWindoResizeHandler);
    }

    render() {
        const options = this.state.userList?.map(user => <option key={`${user.id}-${user.username}`} value={user.id}>{user.username}</option>)
        return (
            <div className="App" style={{ backgroundColor: this.state.bgColor }}>
                <h1>LIFE CYCLE METHODS IMPLEMENTATION DEMO</h1>
                <br />
                <ControllForm />
                <br />
                <h1>Width:{this.state.windowWidth}</h1>
                <h1>Height:{this.state.windowHeight}</h1>
                <div>
                    <span>Select Post</span>
                    <select onChange={this.dropDownOnChangehandler}>
                        {options}
                    </select>
                </div>
                <div>
                    <table style={{border:'1px solid black'}}>
                        <tbody>
                            <tr style={{border:'1px solid black'}}>
                                <td>firstName</td>
                                <td>{this.state.selectedUserDetails.firstName}</td>
                            </tr>
                            <tr style={{border:'1px solid black'}}>
                                <td>email</td>
                                <td>{this.state.selectedUserDetails.email}</td>
                            </tr>
                            <tr style={{border:'1px solid black'}}>
                                <td>age</td>
                                <td>{this.state.selectedUserDetails.age}</td>
                            </tr>
                            <tr style={{border:'1px solid black'}}>
                                <td>gender</td>
                                <td>{this.state.selectedUserDetails.gender}</td>
                            </tr>
                            <tr style={{border:'1px solid black'}}>
                                <td>maritalStatus</td>
                                <td>{this.state.selectedUserDetails.maritalStatus}</td>
                            </tr >
                            <tr style={{border:'1px solid black'}}>
                                <td>phone</td>
                                <td>{this.state.selectedUserDetails.phone}</td>
                            </tr>
                            <tr style={{border:'1px solid black'}}>
                                <td>website</td>
                                <td>{this.state.selectedUserDetails.website}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ForwardRefDemo ref={this.childMessageRef}>
                    <h1>H1 Tag Comming From Parent to Child Component as a Children Props</h1>
                    <input type="text" value="Some value here" />
                </ForwardRefDemo>
            </div>

        );
    }
};

export default LifeCycleMethodsImplementationsDemo;