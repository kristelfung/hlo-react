import React, { Component } from 'react';
import Button from './components/Button/';
import Navbar from './components/Navbar/';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import './css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Body/>
        <Button buttonType="primary"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
