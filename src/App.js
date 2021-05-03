import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    )
  }
}

export default App;
