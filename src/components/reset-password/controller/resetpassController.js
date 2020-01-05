import {ResetPassView} from './../view/resetpassView';

export class ResetPassController {

  constructor() {
    this.view = new ResetPassView();
    this.render();
  }

  render(){
    document.getElementById('app').append(this.view.resetPassBlock);
  }

}