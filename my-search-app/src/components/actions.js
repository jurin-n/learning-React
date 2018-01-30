import C from '../constants'

export const searchItems = (keyword) =>
    ({
        type:C.SEARCH_ITEM,
        keyword:keyword
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