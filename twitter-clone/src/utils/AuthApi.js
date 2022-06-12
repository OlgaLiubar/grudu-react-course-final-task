class Auth {
    constructor() {
      this._baseUrl = "http://localhost:3001/users";
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      console.log(res.json());
      return Promise.reject(`Error: ${res.status}`);
    }
  
    signIn(username) {
      return fetch(`${this._baseUrl}/${username}`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(this._checkResponse);
    }
  }
  
  export const auth = new Auth();