import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { items, sort } from './reducers'

const initialState = {
    items:[
        {
        "id":"item001",
        "title":"商品***"
        },
        {
        "id":"item002",
        "title":"商品@@@"
        }
    ],
    sort: "SORTED_BY_ID"
}

const store = createStore(
    combineReducers({items,sort}),
    initialState
)

console.log("before sending action")
console.log(store.getState())

store.dispatch(
    {
        type:"ADD_ITEM",
        id:"item003",
        title:"商品ああ"
    }
)

console.log("after sending action")
console.log(store.getState())

ReactDOM.render(<div>test</div>, document.getElementById('root'));
