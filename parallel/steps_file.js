// in this file you can append custom step methods to 'I' object

module.exports = function() {
  let parametres = require ('../parametres/qa.json');
  return actor({
    getParametresData : function(key){return parametres[key]},


    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
