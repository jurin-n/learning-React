import React from 'react';
import PropTypes from 'prop-types'
import SearchForm from './ui/SearchForm'
import { searchItems } from '../actions'

const SearchItems = (props, {store}) => 
    <SearchForm onSearchItems={params => 
                    searchItems(params)(store.dispatch)}/>

SearchItems.contextTypes = {
    store: PropTypes.object
}

export default SearchItems