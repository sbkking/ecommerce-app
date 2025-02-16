const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  orderStatus: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
  timestamps: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
