// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  // add : function() {

  // },

  toggleStatus: function(username) {
    if(Friends._data[username]) {
      delete Friends._data[username];
    } else {
      Friends._data[username] = username;
    }
    console.log(Friends._data);
  }

};
//fixed
//:) awsome!!