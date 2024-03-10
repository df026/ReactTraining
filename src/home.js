import React from 'react'
import { Link, Navigate } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { user:{} , isLoggedIn : JSON.parse(localStorage.getItem('loggedin')) };
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({user:user})
    }

    handleClick = () => {
        this.setState({isLoggedIn:"false"});
        localStorage.removeItem("loggedin");
    }

    render() { 
        if(this.state.isLoggedIn==="false"){
            return <Navigate to='/login'/>
        }
        return ( 
            <>
                <h1>Hi, {this.state.user.name}</h1>
                <button onClick={this.handleClick}>Log Out</button> <Link to="/changePassword">Change Password</Link> <Link to="/editProfile">Edit Profile</Link>
            </>
        );
    }
}
 
export default Home;