// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: new Map(),

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
add: function(message){
  Messages._data.set(message.message_id, message);
},

update: function(data, callback = () => {}){
data.forEach((message) => {
Messages.add(message);
});
callback(Messages._data);
}

};
