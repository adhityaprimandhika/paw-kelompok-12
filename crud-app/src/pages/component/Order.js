import React, { useState, useEffect } from "react";
import Axios from "axios";

function Order() {
  const [menuList, setMenuList] = useState([]);
  const [newQuantity, setNewQuantity] = useState(0);
  useEffect(() => {
    Axios.get("http://localhost:3001/order").then((response) => {
      setMenuList(response.data);
    });
  }, []);

  const updateMenu = (id) => {
    Axios.put("http://localhost:3001/order/update", {
      id: id,
      newQuantity: newQuantity,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
    });
  };

  const deleteMenu = (id) => {
    Axios.delete(`http://localhost:3001/order/delete/${id}`).then(function () {
      // successful response flow
      window.location.reload(false);
    });
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
            <input
              type="number"
              min="1"
              onChange={(event) => {
                setNewQuantity(event.target.value);
              }}
              placeholder="Change Quantity..."
            ></input>
            <button
              onClick={() => {
                updateMenu(val._id);
                //window.location.reload(false);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                deleteMenu(val._id);
                //window.location.reload(false);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
