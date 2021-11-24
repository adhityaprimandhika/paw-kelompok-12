import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Axios from "axios";

function Order() {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/menu").then((response) => {
      setMenuList(response.data);
    });
  }, []);
  const deleteMenu = (id) => {
    Axios.delete(`http://localhost:3001/menu/delete/${id}`);
  };

  return (
    <div className="menu-list">
      <h1>Order List</h1>
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
            <button onClick={() => deleteMenu(val._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
