import React, { useState } from "react";
import Axios from "axios";
import "./Menu.css";
import espresso from "./image/espresso.jpg";
import americano from "./image/americano.jpg";
import cappuccino from "./image/cappuccino.jpg";
import latte from "./image/latte.jpg";
import mochaccino from "./image/mochaccino.jpg";
//import Input from "./Input";

function Menu() {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addToList = () => {
    Axios.post("http://localhost:5000/insert", {
      menuName: menuName,
      price: price,
      quantity: quantity,
    }).then(function () {
      // successful response flow
      window.location.reload(false);
      alert("Item added");
    });
  };

  const list_menu = [
    {
      id: 1,
      menuname: "Espresso",
      price: 18000,
      img: espresso,
    },
    {
      id: 2,
      menuname: "Americano",
      price: 19000,
      img: americano,
    },
    {
      id: 3,
      menuname: "Cappuccino",
      price: 20000,
      img: cappuccino,
    },
    {
      id: 4,
      menuname: "Mochaccino",
      price: 21000,
      img: mochaccino,
    },
    {
      id: 4,
      menuname: "Latte",
      price: 22000,
      img: latte,
    },
  ];

  return (
    <div className="menus container">
      <div className="row justify-content-between">
        {list_menu.map((item) => (
          <div className="col-auto item">
            <img
              src={item.img}
              width="300"
              height="200"
              className="image align-self-center"
            />
            <div className="desc">
              <h5>{item.menuname}</h5>
              <h6>{item.price}</h6>
              <label>Quantity</label>
              <input
                id={"quantity" + item.id}
                type="number"
                min="1"
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              ></input>
              <a
                className="btn btn-secondary"
                onClick={() => {
                  let input = document.getElementById(
                    "quantity" + item.id
                  ).value;
                  if (isNaN(input) || input < 1) {
                    alert("No item selected");
                  } else {
                    setMenuName(item.menuname);
                    setPrice(item.price);
                    addToList();
                  }
                }}
              >
                Add to List
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
