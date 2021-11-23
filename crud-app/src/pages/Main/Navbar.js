import React, { useEffect } from 'react';
import './Navbar.css'
function Navbar(){
    return (
        <div>
            <ul>
                <li><a href="default.asp">Halaman Menu</a></li>
                <li><a href="news.asp">Halaman Antrian</a></li>
            </ul>
        </div>
    );
}
    
export default Navbar;