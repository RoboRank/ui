import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './containers/MainCard';

function App() {
    return (
        <div>
            <header className="App-header">
                <h1>
                    RoboRank
                </h1>
            </header>

            <MainCard />

            <footer className="App-footer">
                <img src={logo} className="App-logo" alt="logo" />
            </footer>
        </div>
    );
}

export default App;
