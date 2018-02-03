import SearchForm from './ui/SearchForm'
import { searchItems } from '../actions'
import { connect } from 'react-redux'

const SearchItems = connect(
    null,
    dispatch => ({
        onSearchItems(params){
            searchItems(params)(dispatch)
        }
    })
)(SearchForm)

export default SearchItems