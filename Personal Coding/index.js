import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './parent.js';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(<Router><Parent /></Router>, document.getElementById("root"));