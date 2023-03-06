import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-left" autoClose={2000} theme="colored" />
  </React.StrictMode>
);


