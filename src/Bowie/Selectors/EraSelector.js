import React from 'react';
import PropTypes from 'prop-types';
import './Selectors.css';

const EraSelector = ({eraType, active, label, clickHandler}) => {
  let activeClass = active ? "selected" : ""
  return (
    <button
      className={`era selector ${eraType} square ${activeClass}`}
      onClick={e => clickHandler(eraType)}
    >
      {label}
    </button>
  );
};

export default EraSelector;

EraSelector.propTypes = {
  active: PropTypes.bool,
  eraType: PropTypes.string,
  label: PropTypes.string,
  clickHandler: PropTypes.func
}