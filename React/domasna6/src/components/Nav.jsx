import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

    return(
        <ul id="Nav">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/posts'}>Posts</Link></li>
        <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
    )
}