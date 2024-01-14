const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
});


const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  items: [cartItemSchema]
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;