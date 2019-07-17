var db  = require('./db.json');
var user = require('./data/user.json');
var menu = require('./data/menu.json');
// and so on

module.exports = function() {
  return {
    db  : db,
    user : user,
    menu : menu
// and so on
  }
}
