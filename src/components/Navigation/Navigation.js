import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () =>(
    <ul>
        <li><Link to="/">Twitters</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/notes">Notes</Link></li>
    </ul>
)

export default Navigation;