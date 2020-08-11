import React, { Component } from 'react';
import './App.scss';
import Header from './component/header/Header';
import AboutMe from './component/aboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
      </main>
    );
  }
}

export default App;
