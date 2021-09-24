import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [newMenuName, setNewMenuName] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setMenuList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      menuName: menuName,
      price: price,
      quantity: quantity,
    });
  };

  const updateMenu = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newMenuName: newMenuName,
      newQuantity: newQuantity,
    });
  };

  const deleteMenu = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
