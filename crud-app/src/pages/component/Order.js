import React, { useState, useEffect } from "react";
import Axios from "axios";

function Order() {
  const [menuList, setMenuList] = useState([]);
  const [newQuantity, setNewQuantity] = useState(0);
  useEffect(() => {
    Axios.get("http://localhost:5000/order").then((response) => {
      setMenuList(response.data);
    });
  }, []);

  const updateMenu = (id) => {
    Axios.put("http://localhost:5000/order/update", {
      id: id,
      newQuantity: newQuantity,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
      alert("Item updated");
    });
  };

  const deleteMenu = (id) => {
    Axios.delete(`http://localhost:5000/order/delete/${id}`).then(function () {
      // successful response flow
      window.location.reload(false);
      alert("Item deleted");
    });
  };

  return (
    <div className="menu-list">
      <h1 className="title">Order List</h1>
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
              id={"quantity" + val.id}
              type="number"
              min="1"
              defaultValue={val.quantity}
              onChange={(event) => {
                setNewQuantity(event.target.value);
              }}
              placeholder="Change Quantity..."
            ></input>
            <button
              onClick={() => {
                let input = document.getElementById("quantity" + val.id).value;
                if (isNaN(input) || input < 1 || input == val.quantity) {
                  input = val.quantity;
                  alert("No changes");
                } else {
                  updateMenu(val._id);
                }
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                deleteMenu(val._id);
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
