import C from './constants'

export const item = (state={}, action) => {
    switch(action.type){
        case C.ADD_ITEM:
        return {
            id:action.id,
            title:action.title
        }
        case C.GET_ITEM:
        return {}
        default:
        return state
    }
}

export const items = (state=[], action) => {
    switch(action.type){
        case C.ADD_ITEM:
        return [
            ...state,
            item({}, action)
        ]
        case C.REMOVE_ITEM:
        return state.filter(
            i => i.id !== action.id
        )
        default:
        return state
    }
}

export  const sort = (state="SORTED_BY_ID", action) => {
    switch(action.type){
        case C.SORT_ITEMS:
        return action.sortBy
        default:
        return state
    }
}