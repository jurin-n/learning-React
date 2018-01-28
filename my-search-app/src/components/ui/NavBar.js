import React from 'react';
import SearchForm from './SearchForm'

const NavBar = () => 
    <nav className="navbar navbar-light bg-light justify-content-between">
        <div className="container-fluid">
            <div className="row">
                <div>
                    <a className="navbar-brand">テンテン市場</a>
                </div>
                <div>
                    <SearchForm />
                </div>
            </div>
        </div>
    </nav>

export default NavBar