import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Selectors.css';

class GeneratorButton extends Component {
  state = {changed: false}

  findButtonLabel = (era) => {
    const labels = {
      "aladdin-sane": "Time for Aladdin",
      "ziggy-stardust": "Hang on to Ziggy",
      "thin-white-duke": "Stay for the Duke"
    }
    return labels[era]
  }

  submitHandler = () => {
    let payload = {
      chars: this.props.numChars,
      era: this.props.era
    }
    this.props.submitHandler(payload);
    this.setState({changed: true})
  }

  render() {
    let buttonLabel = this.state.changed ?
      "Ch-ch-ch-changes?"
      :
      this.findButtonLabel(this.props.era)
    return (
      <button
        id="generator-button"
        onClick={e => this.submitHandler()}
      >
        {buttonLabel}
      </button>
    );
  }
}

export default GeneratorButton;

GeneratorButton.propTypes = {
  era: PropTypes.string,
  numChars: PropTypes.number,
  submitHandler: PropTypes.func
}