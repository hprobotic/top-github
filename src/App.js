import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, UserInfo } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users/:userName" component={UserInfo} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
