import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import home from './page/home';
import profile from './page/profile';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"component={home}/>
        <Route path="/profile/:id"component={profile}/>
      </Switch>
    </Router>
  );
}

export default App;
