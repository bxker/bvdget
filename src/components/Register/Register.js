import React from 'react';
import './styles/Register.css';
import {connect} from 'react-redux';
import {getSession, registerUser} from '../../redux/reducers/authReducer';
import { Redirect } from 'react-router-dom';

function Register(props) {
    const [first_name, setFirstName] = React.useState('');
    const [last_name, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    
    React.useEffect(() => {
        if(props.getSession) {
            props.getSession();
        }
    }, [props])

    const register = () => {
        if(password === confirmPassword) {
            console.log('hit')
            let newUser = {first_name, last_name, username, email, password}
            console.log(newUser)
            props.registerUser(newUser)
        }else{
            new Error('Password not valid')
        }
    }

    if(props.user_id){
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="register-container">
            <div className="register-box">
                <section>
                    <h1>Sign Up</h1>
                </section>
                <section>
                    <div>
                        <input placeholder="First Name" onChange={e => setFirstName(e.target.value)}></input>
                        <input placeholder="Last Name" onChange={e => setLastName(e.target.value)}></input>
                        <input placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <input placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
                        <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}></input>
                        <input placeholder="Confirm Password" type="password" onChange={e => setConfirmPassword(e.target.value)}></input>
                        {password === confirmPassword ? <h2>Passwords Match!</h2>: <h1>Passwords do not match.</h1>}
                    </div>
                </section>
                <button onClick={register}>Sign Up</button>
            </div>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        user_id: reduxState.authReducer.user_id
    }
}

export default connect(mapStateToProps, {
    registerUser,
    getSession
})(Register)
