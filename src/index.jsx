import './components/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { HashRouter as Router } from 'react-router-dom';
import { basePath } from 'src/constants';

if (!window.location.pathname.includes(`${basePath}/`)) {
  window.location.replace(`${basePath}/`);
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
