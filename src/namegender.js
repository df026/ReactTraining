import React from 'react'
import { json } from 'react-router-dom';
class NameGender extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        users: JSON.parse(localStorage.getItem('users')) || [],
        name: '',
        gender: '',
        currentIndex: null,
        style: {display: "none"},
    };

    handleAddUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, gender: this.state.gender}
        let users = this.state.users;
        users.push(user);
        this.setState({users: users, name: "", gender:""});
        localStorage.setItem("users", JSON.stringify(users));
    }

    handleDelete = (i) => {
        let users = this.state.users.slice();
        users.splice(i, 1);
        this.setState({users:users});
        localStorage.setItem("users", JSON.stringify(this.state.users));
    }

    handleEdit = (i) => {
        const {users} = this.state;
        this.setState({currentIndex : i, name: users[i].name, gender: users[i].gender, style: {display:'block'}});
    }

    editUsers = () => {
        const {name, gender, users, currentIndex} = this.state;
        users[currentIndex].name = name;
        users[currentIndex].gender = gender;
        this.setState({users: users, name:'', gender:'', currentIndex:null, style: {display:'none'}}) 
        localStorage.setItem("users", JSON.stringify(this.state.users));
    }

    render() { 
        return ( 
            <>
                <form onSubmit={this.handleAddUser}>
                    <input type='text' placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} required/><br/>
                    <select value={this.state.gender} onChange={(e) => this.setState({gender: e.target.value})}>
                        <option>Choose Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select><br/>
                    <input type='submit'/>
                    <button onClick={this.editUsers} style={this.state.style}>Edit</button>
                </form>

                <table border='1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((v,i) => {
                            return (
                                <>
                                    <tr key={i}>
                                        <td>{v.name}</td>
                                        <td>{v.gender}</td>
                                        <td><button onClick={() => this.handleDelete(i)}>Delete</button> <button onClick={() => this.handleEdit(i)}>Edit</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}
 
export default NameGender;