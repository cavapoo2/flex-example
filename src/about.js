import React  from 'react';
import {Link} from 'react-router-dom';
import './Simple.css';


export const About = () => (
        <div className="main">
                <nav className="navT">
                <Link className="navL" to="/">Home</Link>
                <Link className="navL" to="/about">About</Link>
                <Link className="navL" to="/contact">Contact</Link>

                </nav>

    <h2>About</h2>
    </div>
);
