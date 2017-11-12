/*
  This model enables to create a new "Cart" object.

  The "Cart" object should contain some properties:
    1. Items;
    2. Total Quantity of items;
    3. Total Price of items;

  The "Cart" object should also contain some functions:
    1. add() function;
    2. generateArray() function;
*/

module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id){
    var storeItem = this.items[id];
    if(!storeItem){
      storeItem = this.items[id] = {
        item: item,
        qty: 0,
        price: 0
      };
    }
    storeItem.qty++;
    storeItem.price = storeItem.item.price * storeItem.qty;
    this.totalQty++;
    this.totalPrice += storeItem.item.price;
  };

  this.reduceByOne = function(id){
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;

    if(this.items[id].qty <= 0){
      delete this.items[id];
    }
  };

  this.removeItem = function(id){
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  }

  this.generateArray = function(){
    var arr = [];
    for(var id in this.items){
      arr.push(this.items[id]);
    }
    return arr;
  };
};
