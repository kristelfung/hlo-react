import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import 'font-awesome/css/font-awesome.css'
import 'react-select/dist/react-select.css';

import Navbar from './components/Navbar';
import Body from './components/Body'
import Footer from './components/Footer';

ReactDOM.render(
  <div>
    {
      (window.location.pathname === '/login') ?
        <Body />
        :
        <div>
          <Navbar />
          <Body />
          <Footer />
        </div>
    }
  </div>
,document.getElementById('root'));
