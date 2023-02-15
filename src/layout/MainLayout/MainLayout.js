import React from 'react';
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            HELLO EVERYBODY
        </div>
    );
};

export default MainLayout;