import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import home from './page/home';
import showuser from './page/showuser';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"component={home}/>
        <Route path="/showuser/:id"component={showuser}/>
      </Switch>
    </Router>
  );
}

export default App;
