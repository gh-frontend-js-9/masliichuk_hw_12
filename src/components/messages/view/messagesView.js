export class MessagesView {

  constructor() {

    this.token = localStorage.getItem('token');
    this.generateThreads();
  }

  generateThreads(){

    fetch('http:/localhost:3000/api/threads', {
      method: 'GET',
      headers: {
        'x-access-token': this.token,
      }
    })
        .then(response => {
      return response.json();
    }).then(threads => {
      console.log(threads);

      threads.forEach(thread => {
        var threadBlock = this.createThread(thread);
        threadBlock.addEventListener('click', () => {
          document.getElementById('messages').innerHTML = '';
          const messagesElements = this.generateMessages(thread._id);
        });
        document.getElementById('threads').append(threadBlock);
      });

    })

  }

  generateMessages(threadId) {

    fetch('http:/localhost:3000/api/threads/messages/'+threadId, {
      method: 'GET',
      headers: {
        'x-access-token': this.token,
      }
    })
        .then(response => {
          return response.json();
        }).then(thread => {

          console.log(thread);

      thread.messages.forEach(message => {
            var messageBlock = this.createMessage(message, thread);
            document.getElementById('messages').append(messageBlock);
          });

    })

  }

  createMessage(message, thread){
    var messageItem = document.createElement('div');
    messageItem.className = 'message-item';

    const messageUser = thread.users.filter(user => user._id === message.user)[0];
    if (messageUser.me) {
      messageItem.className = 'message-item right';
    }

    var flexContainer = document.createElement('div');
    flexContainer.className = 'flex-container';

    var profileIcon = document.createElement('div');
    profileIcon.className = 'profile-icon';

    var profileImgSrc = document.createElement('img');
    profileImgSrc.src = 'images/profile-icon.png';

    var div = document.createElement('div');

    var messageSender = document.createElement('div');
    messageSender.className = 'message-sender';
    messageSender.innerText = message.body;

    var dateMessage = document.createElement('div');
    dateMessage.className = 'date-message';

    var p = document.createElement('p');
    p.innerText = message.created_at;


    messageItem.appendChild(flexContainer);
    flexContainer.appendChild(profileIcon);
    flexContainer.appendChild(div);
    profileIcon.appendChild(profileImgSrc);
    div.appendChild(messageSender);
    div.appendChild(dateMessage);
    dateMessage.appendChild(p);

    return messageItem;
  }

  createThread(thread){
    var fullMessageItem = document.createElement('div');
    fullMessageItem.className = 'full-message-item';

    var headerProfile = document.createElement('div');
    headerProfile.className = 'header-profile flex-container';

    var headerProfileItem = document.createElement('div');
    headerProfileItem.className = 'header-profile-item';

    var profileIcon = document.createElement('div');
    profileIcon.className = 'profile-icon';

    var profileImg = document.createElement('img');
    profileImg.src = 'images/profile-icon.png';

    var userName = document.createElement('div');
    userName.className = 'user-name';
    const user = thread.users.filter(user => user.me === false)[0];
    userName.innerText = user.name;

    var dateMessage = document.createElement('div');
    dateMessage.className = 'date-message';
    dateMessage.innerText = thread.updated_at;

    var userMessageItem = document.createElement('div');
    userMessageItem.className = 'user-message-item';

    var textUserMessageItem = document.createElement('p');
    var lastMessage = 'No message yet';
    if ( thread.last_message.body ) {
      lastMessage = thread.last_message.body
    }
    textUserMessageItem.innerText = lastMessage;

    fullMessageItem.appendChild(headerProfile);
    headerProfile.appendChild(headerProfileItem);
    headerProfileItem.appendChild(profileIcon);
    profileIcon.appendChild(profileImg);
    headerProfileItem.appendChild(userName);
    headerProfile.appendChild(dateMessage);
    fullMessageItem.appendChild(userMessageItem);
    userMessageItem.appendChild(textUserMessageItem);

    return fullMessageItem;
  }
}
