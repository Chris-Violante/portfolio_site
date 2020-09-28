import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize'
import Portrait from './components/Portrait'

class App extends Component {
  
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
       M.Sidenav.init(elems);
    });
  }
  render () {
    return (
      <div className="App-Container">
        <header className="App-Header">
          <Navigation />
        </header>
        <main>
          <Portrait />
          
        </main>
      </div>
    )
  }
}

export default App;
