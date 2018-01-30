import { createStore, combineReducers} from 'redux'
import { items, sort } from './reducers'

const storeFactory = (initialState) => 
    createStore(
        combineReducers({items, sort}),
        initialState?initialState:{}
    )


export default storeFactory