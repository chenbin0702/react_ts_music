import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import {HashRouter} from 'react-router-dom';
import routes from '@/router'
import 'normalize.css'
import './assets/css/index.less'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter > 
    <App />
    </HashRouter>
 
  </React.StrictMode>
);
