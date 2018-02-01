import React, { Component } from 'react'
import NavBar from './ui/NavBar'
import SearchResult from './ui/SearchResult'
import PropTypes from 'prop-types'

class App extends Component {

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <div>
                <NavBar />
                <SearchResult />
            </div>
        )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

App.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default App
