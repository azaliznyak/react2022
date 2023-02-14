import React from 'react';

import {Outlet} from "react-router-dom";
import css from './PostPage.module.css'

import Posts from "../../components/Posts/Posts";

const PostsPage = () => {
    return (
        <div className={css.PostPage}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;