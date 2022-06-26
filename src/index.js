import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalState from './state';
import GlobalStyles from './globalStyles';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalState>
            <GlobalStyles />
            <Routes />
        </GlobalState>
    </React.StrictMode>
);
