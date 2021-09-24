const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MenuModel = require("./models/Menu");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://newuser:password1234@crud.vplmy.mongodb.net/menu?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const menu = new MenuModel({ menuName: "Burger", price: 10000, quantity: 2 });

  try {
    await menu.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
