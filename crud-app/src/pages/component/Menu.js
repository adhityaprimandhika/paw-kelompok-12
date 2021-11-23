import React from "react";
import './Menu.css'
import cof1 from './image/cof1.jpg'
//import Input from "./Input";

export default function Menu() {
  return (
    <div className="menus">
        <div className="item">
            <img src={cof1} width="300" height="200" />
            <div className="desc">
                <p>Kopi Hitam</p>
                <p>19000</p>
            </div>
        </div>
        <div className="item">
            <img src={cof1} width="300" height="200" />
            <div className="desc">
                <p>Kopi Hitam</p>
                <p>19000</p>
            </div>
        </div>
        <div className="item">
            <img src={cof1} width="300" height="200" />
            <div className="desc">
                <p>Kopi Hitam</p>
                <p>19000</p>
            </div>
        </div>
        <div className="item">
            <img src={cof1} width="300" height="200" />
            <div className="desc">
                <p>Kopi Hitam</p>
                <p>19000</p>
            </div>
        </div>
        <div className="item">
            <img src={cof1} width="300" height="200" />
            <div className="desc">
                <p>Kopi Hitam</p>
                <p>19000</p>
            </div>
        </div>
    </div>
  );
}