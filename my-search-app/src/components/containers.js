import SearchForm from './ui/SearchForm'
import { searchItems, replaceConditions } from '../actions'
import { connect } from 'react-redux'

const SearchItems = connect(
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

export default SearchItems