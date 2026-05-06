import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

    return (
        <ul id='nav'>
            <li><Link to='/cake'>Cakes</Link></li>
            <li><Link to='/comments'>Comments</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
        </ul>
    )
}