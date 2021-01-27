import React from 'react';
import './App.css';
import Home from './Home'
import Search from './Search'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
     
     <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Search">
            <Search/>
          </Route>
          <Route path="*">
              <NotFound />
           </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
