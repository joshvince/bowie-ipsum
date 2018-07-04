import React from 'react';

import './Selectors.css';

const GeneratorButton = ({label, submitHandler}) => {
  return (
    <button id="generator-button" onClick={e => submitHandler()}>
      {label}
    </button>
  );
};

export default GeneratorButton;
