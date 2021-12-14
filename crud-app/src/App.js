import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Order from "./pages/component/Order";
import Menu from "./pages/component/Menu";
// import Main from "./pages/main"

const getFreshModelObject = () => ({ orderDetails: [] });

function App() {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/menu").then((response) => {
      setMenuList(response.data);
    });
  }, []);

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
        <h1 className="title">Ourder</h1>

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
