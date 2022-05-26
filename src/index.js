import './index.css';
import React from 'react';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);