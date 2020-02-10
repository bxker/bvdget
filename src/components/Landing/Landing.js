import React from 'react';
import './styles/Landing.css';
import LandingNav from './LandingNav/LandingNav';

export default function Landing() {
    return (
        <div className="landing-main">
            <LandingNav />
            <section className="landing-container">
                <h2>Welcome to</h2>
                <h1>Bvdget</h1>
                <button>Get Started</button>
            </section>
        </div>
    )
}


