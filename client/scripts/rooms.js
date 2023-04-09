// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),
  // _data: {},
  selected: 'lobby',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
add: function(roomname) {
  Rooms._data.add(roomname);
  // Rooms._data[roomname] = roomname;
  console.log('>>>>>>>>',Rooms._data)
  },

update: function(data, callback = () => {}) {
//iterate over the data array
data.forEach((message) =>
Rooms.add(message.roomname));
  //for each object take the roomnameand add it to out _data set
//we call a callback
callback(Rooms._data);
}
};