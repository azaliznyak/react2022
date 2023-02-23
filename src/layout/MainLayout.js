import React from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            Hello everybody
            
        </div>
    );
};

export default MainLayout;