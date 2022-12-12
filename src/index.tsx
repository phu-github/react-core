import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import './index.css';
import App from './App';
import Dashboard from "./components/pages/Dashboard";
import Setting from "./components/pages/Setting";
import NotFound from "./components/pages/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
