import React from 'react';
import "./header.css";

function Header(props) {
    return (
        <div className="header_container">
            <div className="header_title">
                Be my Santa
            </div>
            <div className="header_description">
                Invite your friends and family to the best way to exchange gifts.
            </div>

        </div>
    );
}

export default Header;