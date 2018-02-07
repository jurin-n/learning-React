import React, { Component } from 'react'
import NavBar from './ui/NavBar'
import SearchResult from './ui/SearchResult'
import Top from './ui/Top'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        const { initConditions,location } = this.props
        const params = new URLSearchParams(location.search);
        let conditions = []
        for (let k of params.keys()) {
            conditions = [
                ...conditions,
                {key:k,value:params.get(k)}
            ]
        }
        initConditions(conditions)
    }

    render(){
        return (
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
        )
    }
}

export default withRouter(App)
