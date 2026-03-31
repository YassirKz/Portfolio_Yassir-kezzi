import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Remove Font Awesome imports and add Bootstrap Icons
// import '@fortawesome/fontawesome-free/css/all.min.css'; // REMOVE THIS LINE
import 'bootstrap-icons/font/bootstrap-icons.css'; 

import './App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);