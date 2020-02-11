import React from 'react';
import './styles/LandingNav.css';
import { Link } from 'react-router-dom';

export default function LandingNav() {
    return (
        <div className="landing-nav">
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </div>
    )
}
