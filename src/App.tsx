import React, {FC} from 'react';
import './App.scss';
import './configs/reset.css';
import './configs/global.scss';
import {Outlet} from "react-router-dom";
import {NavGroup} from "./components/organisms/NavGroup";
import {Header} from "./components/organisms/Header";
import './i18n/i18n';

function App() {

    return (
        <div className="App">
            <NavGroup/>
            <div className='page-container'>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
