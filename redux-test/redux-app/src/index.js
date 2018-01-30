import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers} from 'redux'
import { items, sort } from './store/reducers'

import {addItem, removeItem} from './actions'

import storeFactory from './store'

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


console.log("# subscriber test ---------------")
const logState = () => console.log('next state:',store.getState())

console.log("subscribe logState.")
const unsubscribeLogState = store.subscribe(logState)

store.dispatch(
    {
        type:"ADD_ITEM",
        id:"item101",
        title:"商品１０１"
    }
)
store.dispatch(
    {
        type:"ADD_ITEM",
        id:"item102",
        title:"商品１０２"
    }
)
console.log("unsubscribe logState.")
unsubscribeLogState()
store.dispatch(
    {
        type:"ADD_ITEM",
        id:"item103",
        title:"商品１０３"
    }
)

console.log("subscribe logStateStorage['redux-store'] example.")
const store2 = createStore(
    combineReducers({items, sort}),
    (localStorage['redux-store'])?
        JSON.parse(localStorage['redux-store']):
        {}
)
store2.subscribe(()=>{
    localStorage['redux-store'] = JSON.stringify(store2.getState())
})
store2.dispatch(
    {
        type:"ADD_ITEM",
        id:"item201",
        title:"商品２０１"
    }
)

console.log("using action creater.")
const store3 = createStore(
    combineReducers({items,sort}),
    initialState
)
console.log("addItem")
store3.dispatch(addItem("ITEM301", "商品３０１"))
store3.dispatch(addItem("ITEM302", "商品３０２"))
console.log(store3.getState())

console.log("removeItem")
store3.dispatch(removeItem("ITEM301"))
console.log(store3.getState())

console.log("using middlewire")
const store4 = storeFactory(true)
store4.dispatch(addItem("ITEM301", "商品３０１"))
console.log(store4.getState())

ReactDOM.render(<div>test</div>, document.getElementById('root'));
