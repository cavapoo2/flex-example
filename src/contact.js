import React  from 'react';
import {Link} from 'react-router-dom';
import './Simple.css';


export const Contact = () => (
        <div className="main">
                <nav className="navT">
                <Link className="navL" to="/">Home</Link>
                <Link className="navL" to="/about">About</Link>
                <Link className="navL" to="/contact">Contact</Link>

                </nav>

    <h2>Contact</h2>
    </div>
);
