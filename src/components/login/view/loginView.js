import {ApiService} from "../../../services/apiService";

export class LoginView {

  constructor() {
    this.generateTemplate();
  }

   generateTemplate(){
    this.loginBlock = document.createElement('div');

    let h1 = document.createElement("h1");
    h1.innerText = 'Log in';
    let member = document.createElement("a");
    member.innerText = 'Not a member?';
    member.setAttribute('href', 'index.html?page=signup');
    member.className = 'member-link';

    this.loginForm = document.createElement('form');
    this.loginForm.id = 'loginForm';

    this.login = document.createElement('input');
    this.login.setAttribute('placeholder', 'Email');

    let br = document.createElement('br');

    this.password = document.createElement('input');
    this.password.setAttribute('placeholder', 'Password');
    this.password.setAttribute('type', 'password');

    this.btnSubmit = document.createElement('input');
    this.btnSubmit.setAttribute('type', 'submit');
    this.btnSubmit.setAttribute('value','Log in');
    this.btnSubmit.className = 'btnSubmit';
    this.btnSubmit.addEventListener( "click" , (e) => {
      e.preventDefault();

      ApiService.login(this.login.value, this.password.value)
          .then(response => {
            console.log(response);
            if (response.ok) {
              localStorage.setItem('token',response.headers.get('x-auth-token'));
              location.href = 'messages.html?page=messages';
            } else {
              return response.json();
            }
          })
          .then(data => {
            alert(data.message);
          })

    });

    let forgotPass = document.createElement("a");
    forgotPass.innerText = 'Forgot password?';
    forgotPass.setAttribute('href','index.html?page=resetpass');

    this.loginForm.appendChild(this.login);
    this.loginForm.appendChild(br);
    this.loginForm.appendChild(this.password);
    this.loginForm.appendChild(this.btnSubmit);


    this.loginBlock.appendChild(h1);
    this.loginBlock.appendChild(member);
    this.loginBlock.appendChild(this.loginForm);
    this.loginBlock.appendChild(forgotPass);
  }
}
