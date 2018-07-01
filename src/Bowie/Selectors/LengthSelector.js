import React from 'react';
import PropTypes from 'prop-types';
import './Selectors.css';

const LengthSelector = ({active, clickHandler, label, length}) => {
  let activeClass = active ? "selected" : ""
  return (
    <button
      className={`length selector square ${activeClass}`}
      onClick={e => clickHandler(length)}
    >
      {label}
    </button>
  );
};

export default LengthSelector;

LengthSelector.propTypes = {
  active: PropTypes.bool,
  length: PropTypes.string,
  label: PropTypes.string,
  clickHandler: PropTypes.func
}
