import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <h3>Submenu</h3>
                <ol>
                    <li><Link to={'users'}>users page</Link></li>
                    <li><Link to={'posts'}>all post</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;