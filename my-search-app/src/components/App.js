import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Top from './ui/Top'
import NavBar from './ui/NavBar'
import SearchResult from './ui/SearchResult'
import Whoops404 from './ui/Whoops404'

class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Top} />
                <Route path="/result" component={SearchResult} />
                <Route component={Whoops404} />
              </Switch>
          </div>
        </HashRouter>
      );
    }
}

export default App;
