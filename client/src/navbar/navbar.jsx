import React from "react";
import "./navbar.css"
import logo from "./logo.png";

function Navbar() {
    console.log("Navbar loaded")
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo" height={64} width={64} style={{marginRight:"16px"}}/><h2>MarketDeck</h2>
                    </div>
                    <div className="navlinks">
                        <div className="links">
                            <ul>
                                <li><a>Dashboard</a></li>
                                <li>|</li>
                                <li><a>WatchList</a></li>
                                <li>|</li>
                                <li><a>Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="loginutils">
                        <button className="loginbutton">LogIn</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Navbar;