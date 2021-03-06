const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema(
  {
    products: [
      {
        _id: false,
        productId: { type: Schema.Types.ObjectId, ref: 'game' },
        from: { type: Number, required: true },
        to: { type: Number, required: true },
      },
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Cart = mongoose.model('cart', schema);

module.exports = Cart;
