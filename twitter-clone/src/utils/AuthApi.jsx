class Auth {
    constructor() {
      this._baseUrl = "http://localhost:3001/users";
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    }

    register(email, username, fullName) {
      return fetch(`${this._baseUrl}`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          id: username,
          name: fullName,
        }),
      }).then(this._checkResponse);
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