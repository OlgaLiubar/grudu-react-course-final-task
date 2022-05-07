import React from "react";

export default function Input() {
  const [state, setState] = React.useState({
    value: "What’s happening?",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    setState({ value: evt.target.value });
    console.log(state);
  }

  return (
    <section className="input__section">
           <form className="input__form" onSubmit={handleSubmit}>
      <label>
        <textarea className="input__textarea" value={state.value} onChange={handleChange} />
      </label>
      <input className="input__button" type="submit" value="Tweet" />
    </form> 
    </section>

  );
}
