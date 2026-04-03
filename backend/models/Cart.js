const mongoose = require('mongoose');

const cartStateSchema = new mongoose.Schema({
  // Using a string session ID if they aren't logged in, or User ObjectId if they are.
  sessionId: {
    type: String,
    required: true,
    index: true 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    variant: {
      type: String,
      default: 'Default'
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }]
}, {
  timestamps: true // Keeping track of abandoned carts easily this way
});

const CartModel = mongoose.model('Cart', cartStateSchema);

module.exports = CartModel;
