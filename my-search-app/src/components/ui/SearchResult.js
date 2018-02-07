import React from 'react';
import SearchedItems from './SearchedItems'
import LeftNav from './LeftNav'

const SearchResult = () => 
    <div className="container-fluid">
        <div className="search-result row">
            <SearchedItems />
            <LeftNav />
        </div>
    </div>

export default SearchResult