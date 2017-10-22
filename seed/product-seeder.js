var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://vignette.wikia.nocookie.net/monsterhunter/images/c/cf/Box_Art-MHXX_3DS.jpg/revision/latest/scale-to-width-down/350?cb=20161110020322',
    title: 'Monster Hunter XX',
    description: 'Monster Hunter Double X!!!',
    price: 10
}),
  new Product({
    imagePath: 'https://cdn02.nintendo-europe.com/media/images/05_packshots/games_13/nintendo_3ds_6/PS_3DS_MonsterHunterGenerations_PEGI12.jpg',
    title: 'Monster Hunter X',
    description: 'Monster Hunter Single X!!!',
    price: 15
}),
  new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91aEN32IhkL._SX466_.jpg',
    title: 'Monster Hunter 4G',
    description: 'Monster Hunter 4G!!!',
    price: 20
}),
  new Product({
    imagePath: 'http://vignette4.wikia.nocookie.net/monsterhunter/images/f/f9/Box_Art-MH4U_N3DS.png/revision/latest?cb=20140731011509',
    title: 'Monster Hunter 4U',
    description: 'Monster Hunter 4U!!!',
    price: 25
}),
  new Product({
    imagePath: 'https://vignette.wikia.nocookie.net/monsterhunter/images/d/d7/Box_Art-MH3G_N3DS_JPN.jpg/revision/latest/scale-to-width-down/350?cb=20111003174520',
    title: 'Monster Hunter 3G',
    description: 'Monster Hunter 3G!!!',
    price: 30
}),
  new Product({
    imagePath: 'https://vignette.wikia.nocookie.net/monsterhunter/images/b/b8/Box_Art-MH3U_N3DS_NA.jpg/revision/latest/scale-to-width-down/350?cb=20131111235119',
    title: 'Monster Hunter 3U',
    description: 'Monster Hunter 3U!!!',
    price: 35
})
];

var done = 0;
for(var i = 0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
