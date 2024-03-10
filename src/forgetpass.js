import React from 'react'
import { Navigate } from 'react-router-dom';

class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { OldPassword: "" , NewPassword: "", isDataChng:false}
    
    handleClick = (e) => {
        let user = JSON.parse(localStorage.getItem("user"));
        if(user.password ===  this.state.OldPassword){
            user.password = this.state.NewPassword;
            localStorage.setItem("user",JSON.stringify(user));
            this.setState({isDataChng : true});
        } else {
            alert("Invalid Password");
        }
    }

    render() { 
        if(this.state.isDataChng){
            return <Navigate to="/home"/>
        }
        return (
            <>
                <input type="password" placeholder="Old Password"  onChange={e => this.setState({ OldPassword: e.target.value})} required/><br/>
                <input type="password" placeholder="New Password"  onChange={e => this.setState({ NewPassword: e.target.value})} required/><br/>
                <input type="button" value="Submit" onClick={this.handleClick}/>
            </>
         );
    }
}
 
export default ForgetPassword;