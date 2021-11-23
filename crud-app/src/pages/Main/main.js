import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Menu from './Menu'
import { Provider } from "./Context";
import { drinks } from "../../data.json";
function Main(){
    return (
        <div>
            {/* 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,64L30,96C60,128,120,192,180,224C240,256,300,256,360,250.7C420,245,480,235,540,197.3C600,160,660,96,720,90.7C780,85,840,139,900,160C960,181,1020,171,1080,176C1140,181,1200,203,1260,192C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            */}
            <div>
            <Navbar />
            <h1>Ourder</h1>
            <p>Pesan Makanan Di Sini</p>
            </div>
            <Menu />

            
            
        </div>
    );
}
    
export default Main;