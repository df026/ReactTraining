import React from 'react'
import { Navigate } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { user : { name: "" , email: "", password: "", mobile: ""}, isLoggedIn: false }

    handleSubmit(e){
        e.preventDefault();
        let name = document.getElementById("name").value; 
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        let mobile = document.getElementById("mobile").value;
        this.setState({user : {name:name, email:email, password:pass, mobile:mobile}, isLoggedIn:true});
    }

    componentDidUpdate(){
        localStorage.setItem('user', JSON.stringify(this.state.user))
    }

    render() {
        if(this.state.isLoggedIn){
            return <Navigate to='/login'/>
        }

        return ( 
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input  type="text" id="name"  placeholder="Name" required/><br/>
                    <input  type="email" id="email"  placeholder="Email" required/><br/>
                    <input  type="password" id="password"  placeholder="Password" required/><br/>
                    <input  type="tel" id="mobile"  placeholder="Mobile" required/><br/>
                    <input  type="submit" value="Submit"/><br/>
                </form>
            </>
         );
    }
}
 
export default SignUp;