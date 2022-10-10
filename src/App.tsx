import React, {FC} from 'react';
import './App.scss';
import './configs/reset.css';
import './configs/global.scss';
import {Outlet} from "react-router-dom";

import {NavGroup} from "./components/organisms/NavGroup";
function App() {

  return (
    <div className="App">
		<NavGroup />
		<Outlet/>
    </div>
  );
}

export default App;
