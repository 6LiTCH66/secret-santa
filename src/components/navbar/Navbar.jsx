import React from 'react';
import "./navbar.css"

function Navbar(props) {
    return (
        <div className="navbar_container">
            <div className="navbar_container-links">

                <div className="navbar_logo">
                    MySanta
                </div>

            </div>

            <div className="navbar_links">

                <p className="navbar_login">
                    <a href="#login">Log in</a>
                </p>
                <p className="navbar_join">
                    <a href="#join">Join</a>
                </p>

            </div>

        </div>
    );
}

export default Navbar;