import {ApiService} from "../../../services/apiService";

export class MessagesView {

  constructor() {

    this.token = localStorage.getItem('token');
    this.generateThreads();
  }

  generateThreads(){

    ApiService.getThreads()
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

    ApiService.getMessages(threadId)
        .then(response => {
          return response.json();
        }).then(messages => {
          console.log(messages);
          messages.forEach(message => {
            var messageBlock = this.createMessage(message);
            document.getElementById('messages').append(messageBlock);
          });
    })
  }

  createMessage(message){
    var messageItem = document.createElement('div');
    messageItem.className = 'message-item';

    const myUserId = localStorage.getItem('userId');
    if (message.user._id === myUserId) {
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

    const myUser = thread.users[0];
    localStorage.setItem('userId', myUser._id);
    const user = thread.users[1];
    userName.innerText = user.name;

    var dateMessage = document.createElement('div');
    dateMessage.className = 'date-message';
    dateMessage.innerText = thread.updated_at;

    var userMessageItem = document.createElement('div');
    userMessageItem.className = 'user-message-item';

    var textUserMessageItem = document.createElement('p');
    var lastMessage = 'No messages yet';
    if ( thread.message ) {
      lastMessage = thread.message.body
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
