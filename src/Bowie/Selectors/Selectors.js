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
      selectedLength: "medium"
    }
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

  render() {
    let activeLength = this.state.selectedLength;
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
                    label="Ziggy"
                    clickHandler={switchTheme}
                  />
                  <EraSelector
                    active={theme.name === "aladdin-sane"}
                    eraType="aladdin-sane"
                    label="Aladdin"
                    clickHandler={switchTheme}
                  />
                  <EraSelector
                    active={theme.name === "thin-white-duke"}
                    eraType="thin-white-duke"
                    label="The Duke"
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
                era={theme.name}
                numChars={this.state.numChars}
                submitHandler={this.props.submitHandler}
                key={theme.name}
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