import React from "react";
import { Link } from "react-router-dom";
// import FormButton from "../FormButton/FormButton";
// import FormError from "../FormError/FormError";

export default function AuthForm() {

    const signUp =true

  return (
    <section className="auth">
      <Link to="/">
        <div className="auth__logo"></div>
      </Link>
      <h1 className="auth__title">Title</h1>
      <form className="auth__form" noValidate>
        <fieldset className="auth__fieldset">
          {signUp && (
            <label className="auth__label">
              <p className="auth__input-name">Имя</p>
              <input
                className="auth__input"
                minLength={2}
                maxLength={30}
                type="text"
                name="name"
                required
              />
            </label>
          )}
          <label className="auth__label">
            <p className="auth__input-name">E-mail</p>
            <input
              className="auth__input"
              type="email"
              name="email"
              required
            />
          </label>
          <label className="auth__label">
            <p className="auth__input-name">Пароль</p>
            <input
              className={"auth__input"}
              minLength={8}
              type="password"
              name="password"
              required
            />
          </label>
        </fieldset>
        <button> Кнопка</button>
      </form>
      <p className="auth__signed-up">
        Хотите залогиниться?
      </p>
    </section>
  );
}