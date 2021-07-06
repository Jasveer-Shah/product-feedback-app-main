
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Request from './components/Request';
import Feedback from './components/Feedback';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/header'></Route>
         <Header/>
        <Route path='/main'></Route>
         <Main/>
         <Route path='/request'></Route>
         <Request/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
