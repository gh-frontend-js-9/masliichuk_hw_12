import './assets/styles/styles.scss';

import {LoginController} from "./components/login/controller/loginController";
import {SignUpController} from "./components/sign-up/controller/signupController";
import {ResetPassController} from "./components/reset-password/controller/resetpassController";
import {MessagesController} from "./components/messages/controller/messagesController";

const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get('page');

switch (pageParam) {
  case 'signup':
    new SignUpController();
    break;
  case 'login':
    new LoginController();
    break;
  case 'resetpass':
    new ResetPassController();
    break;
  case 'messages':
    new MessagesController();
    break;
  default:
    new LoginController();
    break;
}
