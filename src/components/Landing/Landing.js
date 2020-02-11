import React from 'react';
import './styles/Landing.css';
import LandingNav from './LandingNav/LandingNav';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="landing-main">
            <LandingNav />
            <section className="landing-container">
                <h2>Welcome to</h2>
                <h1>Bvdget</h1>
                <Link to="/register"><button>Get Started</button></Link>
            </section>
            <section className="landing-art">

            </section>
            <section className="landing-art">

            </section>
            <footer className="footer-main">

            </footer>
        </div>
    )
}


