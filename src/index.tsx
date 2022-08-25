import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './app/application'

const rootContainer = document.querySelector('#root');
if (!rootContainer){
    throw new Error('Root container is not found.');
}

const root = ReactDOM.createRoot(rootContainer);
root.render(<Application />)