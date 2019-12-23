import {LoginView} from './../view/loginView';

export class LoginController {

  constructor() {
    this.view = new LoginView();
    this.render();
  }

  render(){
    document.getElementById('app').append(this.view.loginBlock);
  }

}
