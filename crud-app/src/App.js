import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
// import Main from "./pages/main"

function App() {
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

  return (
    <div className="App">
      {/* <Main /> */}
      <h1>Order App with MERN</h1>
      <label>Menu Name</label>
      <input
        type="text"
        onChange={(event) => {
          setMenuName(event.target.value);
        }}
      ></input>
      <label>Price</label>
      <input
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      <label>Quantity</label>
      <input
        type="number"
        onChange={(event) => {
          setQuantity(event.target.value);
        }}
      ></input>
      <button onClick={addToList}>Add to List</button>
      <div className="menu-list">
        <h1>Menu List</h1>
        {menuList.map((val, key) => {
          return (
            <div key={key} className="menu">
              <h1>{val.menuName}</h1>
              <h2>
                <span>Price: </span>
                {val.price}
              </h2>
              <h2>
                <span>Quantity: </span>
                {val.quantity}
              </h2>
              <input
                type="text"
                placeholder="New Menu Name..."
                onChange={(event) => {
                  setNewMenuName(event.target.value);
                }}
              ></input>
              <input
                type="number"
                onChange={(event) => {
                  setNewQuantity(event.target.value);
                }}
                placeholder="Change Quantity..."
              ></input>
              <button onClick={() => updateMenu(val._id)}>Update</button>
              <button onClick={() => deleteMenu(val._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
