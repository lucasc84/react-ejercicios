import React from 'react';
import { useState } from 'react';
import './Exercise.css';

const App = () => {
  return (
    <div>
      <h1>Formulario</h1>
      <FormContainer />
    </div>
  );
};

const FormContainer = () => {
  const [country, setCountry] = useState('Argentina');

   const handleChange = (evt) => {
    setCountry(evt.target.value);
  };

    const handleConfirm = (evt) => {
    alert(`Te registraste desde ${country}`)
  };

    return (
    <InputComponent
      label="Selecciona tu país"
      country={country}
      onChange={handleChange}
      onConfirm={handleConfirm}
    />
  );
};

const InputComponent = (props) => {
  return (
    <div className="form">
      <label forHtml="country" className="form-label">
        {props.label}
        <input
          name="country"
          onChange={props.onChange}
          placeholder={props.country}
          className="form-input"
        />
      </label>{' '}
      <p className="form-subtext">País actual: {props.country}</p>
      <button onClick={props.onConfirm}>Enviar</button>
    </div>
  );
};

export default App;