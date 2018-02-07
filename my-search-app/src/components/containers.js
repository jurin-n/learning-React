import SearchForm from './ui/SearchForm'
import App from './App'
import { searchItems, replaceConditions, initCondition } from '../actions'
import { connect } from 'react-redux'

export const AppContainer = connect(
    state => ({conditions:state.conditions}),
    dispatch => ({
        initConditions(conditions){
            dispatch(replaceConditions(conditions))
        }
    })
)(App)

export const SearchItems = connect(
    state => ({conditions:state.conditions}),
    dispatch => ({
        onSearchItems(key, value, prevConditions){
            const result = prevConditions.filter(i => i.key !== key)
            const nextConditions = [
                    ...result,
                    {
                        key:key,
                        value:value
                    }
            ]
            dispatch(replaceConditions(nextConditions))
            searchItems(nextConditions)(dispatch)
        }
    })
)(SearchForm)
