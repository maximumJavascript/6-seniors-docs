import './components/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { basePath } from 'src/constants';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basePath}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
