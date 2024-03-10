import React from 'react'
import { Navigate } from 'react-router-dom';
class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { user:{}, isDataChng: false }

    componentDidMount(){
        this.setState({user : JSON.parse(localStorage.getItem("user"))});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let name =  document.getElementById('name').value;
        let email =  document.getElementById('email').value;
        let password =  document.getElementById('password').value;
        let mobile =  document.getElementById('mobile').value;
        this.setState({user:{name:name,email:email,password:password,mobile:mobile}, isDataChng: true});
    }

    componentDidUpdate(){
        localStorage.setItem("user",JSON.stringify(this.state.user));
    }
    
    render() { 
        if(this.state.isDataChng){
            return <Navigate to="/home"/>
        }
        return ( 
            <>
                <h1>Edit Profile</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id="name" placeholder={this.state.user.name}/><br/>
                    <input type='email' id="email" placeholder={this.state.user.email}/><br/>
                    <input type='password' id="password" placeholder={this.state.user.password}/><br/>
                    <input type='tel' id="mobile" placeholder={this.state.user.mobile}/><br/>
                    <input type='submit'  value='Submit'/>
                </form>
            </>
         );
    }
}
 
export default EditProfile;