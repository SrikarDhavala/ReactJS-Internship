import React from "react";
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

function Header() {

    return(
        <div className="holder">
            <header className="header">
                <Navbar />
            </header>
        </div>
    );
}

export default Header