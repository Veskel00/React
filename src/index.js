import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./components/App.js";


ReactDOM.render(
  //element do renderowania
  <App/>,
  //cel, gdzie element ma się podpiąć w HTML
  document.getElementById('root'),
);

serviceWorker.register();
