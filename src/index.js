import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import SignIn from './SignIn'
import Ex from './pages/Ex'
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById(root)
);
