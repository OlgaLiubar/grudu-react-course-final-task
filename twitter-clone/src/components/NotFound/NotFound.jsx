
import React from "react";

export default function NotFound() {

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button type="button" className="not-found__button">
        Назад
      </button>
    </section>
  );
}