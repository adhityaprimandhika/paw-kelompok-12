import React, { useEffect } from 'react';
import '../style/navbar.css'
function Navbar(){
    return (
        <div>
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    );
}
    
export default Navbar;