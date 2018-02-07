import { createStore, combineReducers} from 'redux'
import { items, sort, conditions } from './reducers'

const storeFactory = (initialState) => 
    createStore(
        combineReducers({items, sort, conditions}),
        initialState?initialState:{}
    )


export default storeFactory