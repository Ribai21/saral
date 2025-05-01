import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <StrictMode>
    //   <App />
    // </StrictMode>

    <BrowserRouter>
    <App />
  </BrowserRouter>
  
);
