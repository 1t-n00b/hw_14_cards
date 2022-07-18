import React from 'react';
import './App.css';
import Test from './components/Test';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import RecoveryPass from './components/RecoveryPass';
import NewPass from './components/NewPass';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className={"content"}>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/recovery_pass" element={<RecoveryPass/>}/>
                    <Route path="/new_pass" element={<NewPass/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/404" element={<PageNotFound/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
