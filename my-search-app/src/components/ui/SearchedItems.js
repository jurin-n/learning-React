import React from 'react';
import SearchedItemsRow from './SearchedItemsRow'

const SearchedItems = () => 
    <div class="searched-items card col-md-9 order-last">
        <hr/>
        <SearchedItemsRow />
        <hr/>
        <SearchedItemsRow />
    </div>

export default SearchedItems