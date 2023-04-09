// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function(rooms) {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    rooms.forEach(room =>
      RoomsView.renderRoom(room));
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $room = _.template("<option><%- roomname %></option>");
    //an if statment that check if the $room({romename:romename}) it has a script
    if (roomname && roomname.indexOf('script') === -1) {
      RoomsView.$select.append($room({roomname: roomname}));
    }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = RoomsView.$select.val();

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    console.log('handle click from RommsView ===>', event);
    var roomname = prompt('Room Name', 'lobby');
    console.log('>>>>>>>>>>>>>>>',roomname)
    Rooms.add(roomname);
    //
  }

};
