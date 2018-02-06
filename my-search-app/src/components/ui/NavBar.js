import React from 'react';
//import SearchForm from './SearchForm'
import SearchItem from '../containers'

const NavBar = () => 
    <nav className="navbar navbar-light bg-light justify-content-between">
        <div className="container-fluid">
            <div className="row">
                <div>
                    <a className="navbar-brand" href="/">テンテン市場</a>
                </div>
                <div>
                    <SearchItem />
                </div>
            </div>
        </div>
    </nav>

export default NavBar