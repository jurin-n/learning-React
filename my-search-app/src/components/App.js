import React, { Component } from 'react'
import NavBar from './ui/NavBar'
import SearchResult from './ui/SearchResult'
import Top from './ui/Top'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
const App = () =>
    <Switch>
        <Route exact path="/" component={
            () => (
                <div>
                    <NavBar />
                    <Top />
                </div>
            )
        } />
        <Route exact path="/result" component={
            () => (
                <div>
                    <NavBar />
                    <SearchResult />
                </div>
            )
        } />
    </Switch>

export default App
