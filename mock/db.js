var firstRoute  = require('./db.json');
var secondRoute = require('./test.json');
// and so on

module.exports = function() {
  return {
    firstRoute  : firstRoute,
    secondRoute : secondRoute
// and so on
  }
}
