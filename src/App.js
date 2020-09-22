import React from 'react';
import './css/uifont.css';
import './css/App.css';
import './css/props.css';


import Header from './screens/Header';
import Sidebar from './screens/Sidebar'
function App() {
    return (
        <div className="App flex">
            <Sidebar />

            <Header />
        </div>
    );
}

export default App;
