import React from 'react'
import { Link } from 'react-router-dom';

class General extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <Link to='/bgcolor'>Color Picker</Link>||
                <Link to='/counter'>Counter</Link>||
                <Link to='/signup'>Sign Up</Link>||
                <Link to='/login'>Log In</Link>||
                <Link to='/sum'>Sum</Link>||
                <Link to='/todo'>TODO</Link>||
                <Link to='/namegender'>Name Gender</Link>
            </> 
        );
    }
}
 
export default General;