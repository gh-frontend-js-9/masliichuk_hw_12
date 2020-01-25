import {ApiService} from "../../../services/apiService";

export class SignUpView {

  constructor() {
    this.generateTemplate();
  }

  generateTemplate(){

    this.signupBlock = document.createElement('div');

    let h1 = document.createElement("h1");
    h1.innerText = 'Sign Up';
    let member = document.createElement("a");
    member.innerText = 'Existing member?';
    member.setAttribute('href', 'index.html');
    member.className = 'member-link';

    this.signupForm = document.createElement('form');
    this.signupForm.id = 'signupForm';

    this.name = document.createElement('input');
    this.name.setAttribute('placeholder', 'Name');
    this.name.setAttribute('type', 'text');


    this.login = document.createElement('input');
    this.login.setAttribute('placeholder', 'Email');

    let br = document.createElement('br');
    let br2 = document.createElement('br');

    this.password = document.createElement('input');
    this.password.setAttribute('placeholder', 'Password');
    this.password.setAttribute('type', 'password');


    this.btnSubmit = document.createElement('input');
    this.btnSubmit.setAttribute('type', 'submit');
    this.btnSubmit.setAttribute('value','Sign up');
    this.btnSubmit.className = 'btnSubmit';
    this.btnSubmit.addEventListener( "click" , (e) => {
      e.preventDefault();
      signUp(this.login.value, this.password.value, this.name.value);

      ApiService.signUp(this.login.value, this.password.value, this.name.value)
          .then(response => {
            console.log(response);
            if (response.ok) {
              localStorage.setItem('token',response.headers.get('x-auth-token'));
              location.href = 'messages.html?page=messages';
            } else {
              alert(responseText);
            }
          })
          .catch(error => {
            console.error(error);
          });

    });

    this.signupForm.appendChild(this.name);
    this.signupForm.appendChild(br);
    this.signupForm.appendChild(this.login);
    this.signupForm.appendChild(br2);
    this.signupForm.appendChild(this.password);
    this.signupForm.appendChild(this.btnSubmit);


    this.signupBlock.appendChild(h1);
    this.signupBlock.appendChild(member);
    this.signupBlock.appendChild(this.signupForm);
  }
}
