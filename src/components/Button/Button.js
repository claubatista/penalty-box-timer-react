import React from 'react';
import { Link } from 'react-router-dom'
import './Button.css';

const Button = ({ to, text }) => (
    <Link className="btn__link" to={to}>
        <button className="home__btn-function">
            {text}
        </button>
    </Link>
    
);

export default Button;