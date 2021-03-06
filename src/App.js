import React, { Component } from 'react';

// Components
import Events from './components/Events';
import Bookmarks from './components/Bookmarks';
import Header from './components/Header';
import Weather from './components/Weather';
import Tasks from './components/Tasks';
import Calendar from './components/Calendar';

// SCSS
import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="dashboard">
          <Events />
          <Weather />
          <Bookmarks />
          <Tasks />
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
