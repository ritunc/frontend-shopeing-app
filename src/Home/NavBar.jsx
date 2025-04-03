import React from "react";
import { navList } from './NavList';/*navList is distructured because in NavList.js file 
there is no default keyword after export keyword */
import logo from "./shope_logo.png";
const NavBar = () => {

        // const List = navList.map((curElem) => curElem)

        return (
                <>
                        <header className="Homeheader">
                                <nav className="Homecontainer">
                                        <div className="Home_logo_search_container">
                                                <img src={logo} alt={logo} className="navbarImage"/>
                                                <div className="search_input_container">
                                                        <i className="fa-solid fa-magnifying-glass search" />
                                                        <input type="search" className="HomeSearch" placeholder="Search...." />
                                                </div>

                                        </div>

                                        <ul className="nav-links">
                                                <li>
                                                        {
                                                                navList.map((curElem, index) => {
                                                                        return (


                                                                                <a key={index} className="listAnchor">{curElem.li}</a>
                                                                        )
                                                                })
                                                        }
                                                </li>

                                        </ul>

                                        <div className="HomeAccountId">
                                                <i className="fa-regular fa-heart icon"/>
                                                <i className="fa-solid fa-cart-shopping icon"></i>
                                                <i className="fa-regular fa-bell icon"/>
                                                <img src={logo} alt={logo} className="navbarImage"/>
                                        </div>
                                </nav>
                        </header>
                </>
        )
}

export default NavBar;