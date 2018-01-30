import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Top from './ui/Top'
import NavBar from './ui/NavBar'
import SearchResult from './ui/SearchResult'
import Whoops404 from './ui/Whoops404'

// const App = ({store}) => 
//   <HashRouter>
//     <div>
//         <NavBar />
//         <Switch>
//           <Route exact path="/" component={
//                                   (store)=><Top store={store}/>} />
//           <Route path="/result" component={
//                                   (store)=><SearchResult store={store}/>} />
//           <Route component={Whoops404} />
//         </Switch>
//     </div>
//   </HashRouter>

const App = ({store}) => 
    <div>
        <NavBar />
        <SearchResult store={store}/>
    </div>
export default App;
