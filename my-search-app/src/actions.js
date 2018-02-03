import C from './constants'
import fetch from 'isomorphic-fetch'

const parseResponse = res => res.json()
const logError = error => console.error(error)

export const searchItems = condition => dispatch => {
    let url = 'https://ml.googleapis.com/$discovery/rest?version=v1'
    let method = 'GET'
    let body
    console.log('actions.js searchItems :' + condition.keyword)
    fetch(url, {method,body,headers: { 'Content-Type': 'application/json' }})
        .then(parseResponse)
        .then(json => dispatch(listItems(json)))
        .catch(logError)
}

export const listItems = (items) =>
    ({
        type:C.LIST_ITEMS,
        items:items
    })

export const addItem = (id, title) =>
    ({
        type:C.ADD_ITEM,
        id:id,
        title:title
    })

export const removeItem = (id) =>
    ({
        type:C.REMOVE_ITEM,
        id:id
    })