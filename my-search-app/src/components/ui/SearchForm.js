import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { searchItems, addItem } from '../actions'

const SearchForm = (props, {store}) => {
    let _keyword

    const handleSubmit = e => {
        e.preventDefault()
        //store.dispatch(addItem("ITEM111","aaa"))
        searchItems({keyword:_keyword.value})(store.dispatch)
        _keyword.value = ''
        _keyword.focus()
    }

    return (
        <form class="form-inline" onSubmit={handleSubmit}>
            <input ref={input => _keyword = input} class="form-control form-control-lg mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

SearchForm.contextTypes = {
    store: PropTypes.object
}

export default SearchForm