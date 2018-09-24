import React from 'react';
import {  Route,  BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import {About} from './about';
import {Contact} from './contact'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </div>
  </Router>

,document.getElementById('root'));

registerServiceWorker();
