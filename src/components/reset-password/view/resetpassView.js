import {ApiService} from "../../../services/apiService";

export class ResetPassView {

  constructor() {
    this.generateTemplate();
  }

  generateTemplate(){

    this.resetPassBlock = document.createElement('div');

    let h1 = document.createElement("h1");
    let h4 = document.createElement('h4');
    h1.innerText = 'Reset password';
    h4.innerText = 'Please enter your new password';

    this.resetPassForm = document.createElement('form');
    this.resetPassForm.id = 'resetPassForm';

    this.login = document.createElement('input');
    this.login.setAttribute('placeholder', 'Email');

    let br = document.createElement('br');
    let br2 = document.createElement('br');

    this.password = document.createElement('input');
    this.password.setAttribute('placeholder', 'Password');
    this.password.setAttribute('type', 'password');

    this.resetPass = document.createElement('input');
    this.resetPass.setAttribute('placeholder', 'Confirm password');
    this.resetPass.setAttribute('type', 'password');


    this.btnSubmit = document.createElement('input');
    this.btnSubmit.setAttribute('type', 'submit');
    this.btnSubmit.setAttribute('value','Reset');
    this.btnSubmit.className = 'btnSubmit';
    this.btnSubmit.addEventListener( "click" , (e) => {
      e.preventDefault();

      ApiService.resetPass(this.login.value, this.password.value, this.resetPass.value)
          .then(response => {
            console.log(response);
            if (response.ok) {
              localStorage.setItem('token',response.headers.get('x-auth-token'));
              location.href = 'messages.html?page=messages';
            } else {
              return response.text();
            }
          })
          .then(responseBody => {
            alert(responseBody);
          })
    });


    this.resetPassForm.appendChild(this.login);
    this.resetPassForm.appendChild(br);
    this.resetPassForm.appendChild(this.password);
    this.resetPassForm.appendChild(br2);
    this.resetPassForm.appendChild(this.resetPass);
    this.resetPassForm.appendChild(this.btnSubmit);


    this.resetPassBlock.appendChild(h1);
    this.resetPassBlock.appendChild(h4);
    this.resetPassBlock.appendChild(this.resetPassForm);
  }
}
