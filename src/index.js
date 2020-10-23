import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

//reactDOM przyjmuje parametry:
//1. elementy renderowane
//2.miejsce renderowania elementów w HTML'u

serviceWorker.register();
