import {API_ENDPOINT, USER_TOKEN} from "../constants";

export class ApiService {

  static login(email, pass) {

    const url = `${API_ENDPOINT}/api/users/login`;

    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${pass}`
    })
  }

  static signUp(email, pass, name) {

    const url = `${API_ENDPOINT}/api/users`;

    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${pass}&name=${name}`
    })
  }

  static resetPass(email, pass, confPass) {

    const url = `${API_ENDPOINT}/api/users`;

    return fetch(`${API_ENDPOINT}/api/users/reset_password`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${pass}&confirmationPassword=${confPass}`
    })
  }


  static getMessages(threadId) {

    return fetch(`${API_ENDPOINT}/api/threads/messages/${threadId}`, {
      method: 'GET',
      headers: {
        'x-access-token': USER_TOKEN,
      }
    })
  }

  static getThreads(){

    return fetch(`${API_ENDPOINT}/api/threads`, {
      method: 'GET',
      headers: {
        'x-access-token': USER_TOKEN,
      }
    })
  }

}