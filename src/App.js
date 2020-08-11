import React, { Component } from 'react';
import './App.scss';
import Header from './component/header/Header';
import AboutMe from './component/aboutMe/AboutMe';
import Educations from './component/eduction/Educations'

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
        <Educations />
      </main>
    );
  }
}

export default App;
