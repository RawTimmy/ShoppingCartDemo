/*
  This model enables to create a new "Product" object.

  The "Product" object should contain some properties:
    1. ImagePath;
    2. Title;
    3. Description;
    4. Price;
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);
