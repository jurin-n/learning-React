import React from 'react'
import fetch from 'isomorphic-fetch'
import {withRouter} from 'react-router'

// TODO この記事(https://reactjs.org/docs/forms.html)を解読してここでやってることの中身を理解 
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', loading: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        this.setState({loading: true});
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => {
                this.setState({loading: false});
                console.log(countryNames);
                this.props.history.push('/result')
            });
        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form class="form-inline" onSubmit={this.handleSubmit}>
                <input ref={input => _value = input} value={this.state.value} onChange={this.handleChange} class="form-control form-control-lg mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}

export default withRouter(SearchForm)