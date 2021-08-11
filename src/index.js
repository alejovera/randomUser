import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { UsuarioProvider } from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
