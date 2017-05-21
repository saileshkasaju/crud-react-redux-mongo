import React, { Component } from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage';
import GameFormPage from './GameFormPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" to="/">Home</Link>
          <Link className="item" activeClassName="active" to="/games">Games</Link>
          <Link className="item" activeClassName="active" to="/games/new">Add New Game</Link>
        </div>
        <Route exactly path="/games" component={GamesPage}/>
        <Route path="/games/new" component={GameFormPage}/>
        <Route path="/game/:_id" component={GameFormPage}/>
      </div>
    );
  }
}

export default App;
