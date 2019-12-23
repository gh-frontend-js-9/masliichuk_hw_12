export class LoginView {
  // login = null;
  // password = null;
  // loginForm = null;

  constructor() {
    this.generateTemplate();
  }

  generateTemplate(){

    this.loginBlock = document.createElement('div');

    let h1 = document.createElement("h1");
    h1.innerText = 'Log in';

    this.loginForm = document.createElement('form');
    this.loginForm.id = 'loginForm';

    this.login = document.createElement('input');
    this.login.setAttribute('placeholder', 'Email');

    let br = document.createElement('br');

    this.password = document.createElement('input');
    this.password.setAttribute('placeholder', 'Password');
    this.password.setAttribute('type', 'password');

    this.loginForm.appendChild(h1);
    this.loginForm.appendChild(this.login);
    this.loginForm.appendChild(br);
    this.loginForm.appendChild(this.password);

    this.loginBlock.appendChild(h1);
    this.loginBlock.appendChild(this.loginForm);
  }
}