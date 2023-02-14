import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Headers = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'albums'}>albums</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
            <NavLink to={'todos'}>todos</NavLink>


        </div>
    );
};

export default Headers;