import React from 'react';
import SearchedItems from './SearchedItems'
import LeftNav from './LeftNav'

const SearchResult = () => 
    <div class="container-fluid">
        <div class="search-result row">
            <SearchedItems />
            <LeftNav />
        </div>
    </div>

export default SearchResult