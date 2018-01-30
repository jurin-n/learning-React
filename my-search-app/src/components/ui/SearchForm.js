import React, { PropTypes, Component } from 'react';
//mport PropTypes from 'prop-types'
import { searchItems,addItem } from '../actions'

const SearchForm = ({store}) => {
    let _keyword

    const handleSubmit = e => {
        e.preventDefault()
        //onNewColor(_keyword.value)
        //store.dispatch(searchItems(_keyword.value))
        store.dispatch(addItem("ITEM111","aaa"))
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

export default SearchForm