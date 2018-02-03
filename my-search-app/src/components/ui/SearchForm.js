import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { searchItems, addItem } from '../../actions'

const SearchForm = ({onSearchItems=f=>f}) => {
        let _keyword

    const handleSubmit = e => {
        e.preventDefault()
        onSearchItems({keyword:_keyword.value})
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

SearchForm.propTypes = {
    onSearchItems: PropTypes.func
}

export default SearchForm