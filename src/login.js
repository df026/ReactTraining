import React from 'react'
import { Navigate } from 'react-router-dom';
class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { isLoggedIn: false }

    handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let user = JSON.parse(localStorage.getItem("user")); 
        if(email===user.email && password === user.password){
            this.setState({isLoggedIn: true});
            localStorage.setItem("loggedin", "true");
        } else {
            alert("Invalid Email or Password");
        }
    }

    render() { 
        if(localStorage.getItem("loggedin") === "true" || this.state.isLoggedIn){
            return <Navigate to="/home" />
        }
        return ( 
            <>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit} >
                    <input  type="email" placeholder="Email" id="email" required/><br/>
                    <input  type="password" placeholder="Password" id="password" required/><br/>
                    <button type="submit">Login</button>
                </form>
            </> 
        );
    }
}
 
export default LogIn;