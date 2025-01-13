import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PolicyDetails from './components/PolicyDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/policy/:id" element={<PolicyDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
