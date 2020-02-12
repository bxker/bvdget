import React from 'react';
import './styles/Login.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

//reducer functions
import {loginUser, getSession} from '../../redux/reducers/authReducer';

function Login(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        if(props.getSession) {
            props.getSession();
        }
    }, [props])

    const login = () => {
        let user = {username, password}
        props.loginUser(user)
    }

    if(props.user_id){
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <section>
                    <h1>Log In</h1>
                </section>
                <section className="login-inputs">
                    <input placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
                    <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}></input>
                </section>
                <button onClick={login}>Login</button>
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
    loginUser,
    getSession
})(Login)
