import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        const { _keyword } = this.refs
        const { onSearchItems, history, conditions} = this.props
        const prevConditions = conditions

        e.preventDefault()
        history.push('/result')
        onSearchItems('keyword', _keyword.value, prevConditions)
        _keyword.focus()
    }

    render(){
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input ref="_keyword" className="form-control form-control-lg mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

SearchForm.propTypes = {
    onSearchItems: PropTypes.func
}

SearchForm.defaultProps = {
    onSearchItems: f=>f
}

export default withRouter(SearchForm)