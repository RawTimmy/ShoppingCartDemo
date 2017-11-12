/*
  This model enables to create a new "Order" object.

  The "Order" object should contain some properties:
    1. User;
    2. Cart;
    3. Address;
    4. Name;
    5. PaymentId;
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  cart: {type: Object, required: true},
  address: {type: String, required: true},
  name: {type: String, required: true},
  paymentId: {type: String, required: true}
});

module.exports = mongoose.model('Order', schema);
