// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $room = _.template("<option><%= roomname %></option>");
    //an if statment that check if the $room({romename:romename}) it has a script
    if (roomname.indexOf('script') === -1) {
      RoomsView.$select.prepend($room({roomname: roomname}));
    }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
