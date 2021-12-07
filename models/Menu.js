const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Menu = mongoose.model("MenuData", MenuSchema);
module.exports = Menu;
