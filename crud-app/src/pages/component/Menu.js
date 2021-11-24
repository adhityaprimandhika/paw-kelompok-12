import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Menu.css";
import cof1 from "./image/cof1.jpg";
//import Input from "./Input";

function Menu() {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [newMenuName, setNewMenuName] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/menu").then((response) => {
      setMenuList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/menu/insert", {
      menuName: menuName,
      price: price,
      quantity: quantity,
    });
  };

  const updateMenu = (id) => {
    Axios.put("http://localhost:3001/menu/update", {
      id: id,
      newMenuName: newMenuName,
      newQuantity: newQuantity,
    });
  };

  const deleteMenu = (id) => {
    Axios.delete(`http://localhost:3001/menu/delete/${id}`);
  };

  const Kopihitam = (event) =>{
    setMenuName("Kopi Hitam");
    setPrice(19000);
    addToList();
  }

  return (
    <div className="menus">
      <div className="item">
        <img src={cof1} width="300" height="200" />
        <div className="desc">
          <p>Kopi Hitam</p>
          <p>19000</p>
          <label>Quantity</label>
          <input
            type="number"
            onChange={(event) => {
            setQuantity(event.target.value);
            }}
          ></input>
          <button className="button-flat" onClick={Kopihitam}>Add to List</button>
        </div>
      </div>
      <div className="item">
        <img src={cof1} width="300" height="200" />
        <div className="desc">
          <p>Kopi Hitam</p>
          <p>19000</p>
          <label>Quantity</label>
          <input
            type="number"
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          ></input>
          <button className="button-flat" onClick={addToList}>Add to List</button>
        </div>
      </div>
      <div className="item">
        <img src={cof1} width="300" height="200" />
        <div className="desc">
          <p>Kopi Hitam</p>
          <p>19000</p>
          <label>Quantity</label>
          <input
            type="number"
            onChange={(event) => {
              setQuantity(event.target.value);
              //setMenuName()
              //setPrice()
            }}
          ></input>
          <button className="button-flat" onClick={addToList}>Add to List</button>
        </div>
      </div>
      <div className="item">
        <img src={cof1} width="300" height="200" />
        <div className="desc">
          <p>Kopi Hitam</p>
          <p>19000</p>
          <label>Quantity</label>
          <input
            type="number"
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          ></input>
          <button className="button-flat" onClick={addToList}>Add to List</button>
        </div>
      </div>
      <div className="item">
        <img src={cof1} width="300" height="200" />
        <div className="desc">
          <p>Kopi Hitam</p>
          <p>19000</p>
          <label>Quantity</label>
          <input
            type="number"
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          ></input>
          <button className="button-flat" onClick={addToList}>Add to List</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
