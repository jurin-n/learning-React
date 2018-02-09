import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class SearchForm extends Component {    
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        const {conditions} = this.props
        this.setState({_keyword:this.defaultKeywordValue(conditions)})
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

    defaultKeywordValue(conditions){
        const c = conditions.filter(c => c.key === "keyword")
        
        if(c.length === 0){
            return ""
        }

        return c[0].value
    }

    render(){
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input ref="_keyword"
                        className="form-control form-control-lg mr-sm-2" 
                        type="search" 
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state._keyword}
                        onChange={(e) => this.setState({_keyword: e.target.value})} />
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