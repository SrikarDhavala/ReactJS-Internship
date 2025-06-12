import React from "react";
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

function Header() {

    return(
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">find your book of choice</h2>
                    <br />
                    <p className="header-text fs-18 fw-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laboriosam mollitia dolore ipsam itaque? Voluptate accusantium fugit sed quod fugiat porro nemo saepe officia, dicta dolorum impedit sit sapiente repellat.</p>
                </div>
            </header>
        </div>
    );
}

export default Header