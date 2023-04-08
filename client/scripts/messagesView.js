// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click','.username', MessagesView.handleClick);
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    messages.forEach((message) => {
      MessagesView.renderMessage(message);
    })
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //message is an object
    // render a message in chat
    //chat is going to render in the DOM

    var $message = MessageView.render(message);
    if ($message.indexOf('script') < 0) {
      // if(/<script.*?<\/script>/gi.test($message) === false){
    MessagesView.$chats.prepend($message);
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // event.preventDefault();
    // console.log("show me the clickhandler to add friends >>>", event.target.innerText);
    var username = event.target.innerText;
    Friends.toggleStatus(username);
  }

};