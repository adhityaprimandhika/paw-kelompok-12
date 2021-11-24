import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Order from "./pages/component/Order";
import Home from "./pages/component/Home";
// import Main from "./pages/main"

function App() {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  /*
  const [newMenuName, setNewMenuName] = useState("");
  const [newQuantity, setNewQuantity] = useState(0); */
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/menu").then((response) => {
      setMenuList(response.data);
    });
  }, []);

  /* const addToList = () => {
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
  };*/

  return (
    <Router>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link className="btn btn-primary" to="/">
                Order Page
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/Order">
                Order List
              </Link>
            </li>
          </ul>
        </div>
        {/* <Main /> */}
        <h1>Ourder</h1>
        {/* <label>Menu Name</label>
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
      <button onClick={addToList}>Add to List</button> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
