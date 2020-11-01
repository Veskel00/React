import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from "./views/root/Root.js";


ReactDOM.render(
  //element do renderowania
  <Root/>,
  //cel, gdzie element ma się podpiąć w HTML
  document.getElementById('root'),
);

serviceWorker.register();
