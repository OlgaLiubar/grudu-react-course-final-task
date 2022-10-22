
class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getTweets() {
    return fetch(`${this._url}/tweets`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  saveTweet(newTweet, authorId, authorName, initials) {
    return fetch(`${this._url}/tweets`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        author_id: authorId,
        author_name: authorName,
        initials: initials,
        text: `${newTweet.text}`,
      }),
    }).then(this._checkResponse);
  }
  // newTweet, authorId, authorName, initials
//   deleteMovie(movieId) {
//     return fetch(`${this._url}/movies/${movieId}`, {
//       method: "DELETE",
//       credentials: "include",
//       headers: this._headers,
//     }).then(this._checkResponse);
//   }

//   uploadUserInfo(data) {
//     return fetch(`${this._url}/users/me`, {
//       method: "PATCH",
//       credentials: "include",
//       headers: this._headers,
//       body: JSON.stringify(data),
//     }).then(this._checkResponse);
//   }
}

const api = new Api({
  url: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;