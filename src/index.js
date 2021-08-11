import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { UsuarioProvider } from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <UsuarioProvider> */}
      <App />
    {/* </UsuarioProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
