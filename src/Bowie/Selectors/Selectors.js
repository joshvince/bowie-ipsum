import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ThemeContext} from '../../theme-context';

import LengthSelector from './LengthSelector';
import EraSelector from './EraSelector';
import GeneratorButton from './GeneratorButton';

import '../grid.css';
import './Selectors.css';

class Selectors extends Component {
  constructor(props){
    super(props)
    this.state = {
      numChars: 300,
      selectedLength: "medium",
      selectedEra: "aladdin-sane",
      buttonLabel: this.findButtonLabel()
    }
  }

  findButtonLabel = (val = "aladdin-sane") => {
    const labels = {
      "aladdin-sane": "Demand Billy Dolls",
      "ziggy-stardust": "Play Guitar",
      "thin-white-duke": "Throw Darts"
    }
    return labels[val]
  }

  changeLength = (newLength) => {
    let newCharLength;
    if (newLength === "short") {
      newCharLength = 100;
    }
    else if (newLength === "medium") {
      newCharLength = 300;
    }
    else {
      newCharLength = 750;
    }
    this.setState({
      numChars: newCharLength,
      selectedLength: newLength
    })
  }

  changeEra = (newEra) => {
    this.setState({
      buttonLabel: this.findButtonLabel(newEra),
      selectedEra: newEra
    })
  }

  toggleRandom = () => {
    let newVal = !this.state.random;
    this.setState({
      random: newVal
    })
  }

  submitHandler = () => {
    let payload = {
      chars: this.state.numChars,
      era: this.state.selectedEra
    }
    this.props.submitHandler(payload);
    this.setState({
      buttonLabel: "Ch-ch-ch Changes?"
    })
  }

  render() {
    let activeLength = this.state.selectedLength;
    let activeEra = this.state.selectedEra;
    return (
      <ThemeContext.Consumer>
        {({theme, switchTheme}) => {
          const textStyle = {color: theme.color};
          return [
            <div key={0}>
              <div className="flex-col-center">
                <p style={textStyle} className="selector-label">Select Era</p>
                <div>
                  <EraSelector
                    active={theme.name === "ziggy-stardust"}
                    eraType="ziggy-stardust"
                    label="ZS"
                    clickHandler={switchTheme}
                  />
                  <EraSelector
                    active={theme.name === "aladdin-sane"}
                    eraType="aladdin-sane"
                    label="AS"
                    clickHandler={switchTheme}
                  />
                  <EraSelector
                    active={theme.name === "thin-white-duke"}
                    eraType="thin-white-duke"
                    label="TWD"
                    clickHandler={switchTheme}
                  />
                </div>
              </div>
            </div>,
            <div key={1}>
              <div className="flex-col-center">
                <p style={textStyle} className="selector-label">Select Length</p>
                <div>
                  <LengthSelector
                    length="short"
                    active={activeLength === "short"}
                    clickHandler={this.changeLength}
                    label="S"
                  />
                  <LengthSelector
                    length="medium"
                    active={activeLength === "medium"}
                    clickHandler={this.changeLength}
                    label="M"
                  />
                  <LengthSelector
                    length="long"
                    active={activeLength === "long"}
                    clickHandler={this.changeLength}
                    label="L"
                  />
                </div>
              </div>
            </div>,
            <div key={2} className="full-width-box">
              <GeneratorButton
                label={this.state.buttonLabel}
                submitHandler={this.submitHandler}
              />
            </div>
          ]
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Selectors;

Selectors.propTypes = {
  submitHandler: PropTypes.func
}