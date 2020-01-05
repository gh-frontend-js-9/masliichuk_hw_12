import {SignUpView} from './../view/signupView';


export class SignUpController {

  constructor() {
    this.view = new SignUpView();
    this.render();
  }

  render(){
    document.getElementById('app').append(this.view.signupBlock);
  }

}