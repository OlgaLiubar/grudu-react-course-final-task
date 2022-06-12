/* eslint-disable react/prop-types */
import React from "react";
// import AuthForm from "../AuthForm/AuthForm";

export default function Login({handleLogin}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleUsernameChange(evt) {
    setUsername(evt.target.value);
  }

  function handlePasswordChange(evt) {
      setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
      evt.preventDefault();
      if (!password || !username) {
          return;
      }
      handleLogin(username);
      setUsername('');
      setPassword('');
  }


  return (
      <main>
          <section className="auth">
              <form
                  className="auth-form"
                  onSubmit={handleSubmit}
              >
                  <h2 className="auth-form__title">Вход</h2>

                  <input
                      className="auth__input"
                      type="username"
                      placeholder="Username"
                      required
                      value={username}
                      onChange={handleUsernameChange}
                  />

                  <input
                      className="auth__input"
                      type="password"
                      placeholder="Пароль"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                  />

                  <button
                      className="auth__submit-btn"
                      type="submit"
                      onClick={handleSubmit}
                  >
                      Войти
              </button>
              </form>
          </section>

      </main>
  );
}
