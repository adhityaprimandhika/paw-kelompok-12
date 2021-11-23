const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const MenuModel = require("./models/Menu");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://newuser:password1234@crud.vplmy.mongodb.net/menu?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/menu/insert", async (req, res) => {
  const menuName = req.body.menuName;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const menu = new MenuModel({
    menuName: menuName,
    price: price,
    quantity: quantity,
  });

  try {
    await menu.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/menu", async (req, res) => {
  MenuModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.put("/menu/update", async (req, res) => {
  const newMenuName = req.body.newMenuName;
  const newQuantity = req.body.newQuantity;
  const id = req.body.id;

  try {
    MenuModel.findById(id, (err, updatedMenu) => {
      updatedMenu.menuName = newMenuName;
      updatedMenu.quantity = newQuantity;
      updatedMenu.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/menu/delete/:id", async (req, res) => {
  const id = req.params.id;

  await MenuModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
