import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ThemeContext} from '../../theme-context';

import './Lorem.css';

class Lorem extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonLabel: "Copy"
    }
    this.clipboardText = null

    this.setClipboardTextRef = el => {
      this.clipboardText = el;
    }
  }

  componentWillUnmount = () => {
    this.clipboardText = null;
  }

  copyToClipboard = e => {
    e.preventDefault();
    let range = document.createRange();
    range.selectNode(this.clipboardText);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    this.resetButtonCopy()
    this.setState({
      buttonLabel: "Copied"
    })
  }


  resetButtonCopy = () => {
    setTimeout(() => {
      this.setState({
        buttonLabel: "Copy"
      })
    }, 1500);
  }

  render() {
    let btnClass = this.state.buttonLabel;
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <div id="lorem-container">
            <p
              ref={this.setClipboardTextRef}
              className="lorem-text"
              style={{color: theme.color}}
            >
              {this.props.loremText}
            </p>
            <div className="flex-col-end">
              <div className="song-list">
                {this.props.songList.map((song, i) => (
                  <div key={i} className="song catamaran" style={{color: theme.color}}>
                    {song}
                  </div>
                ))}
              </div>
              <button className={`copy-button ${btnClass}`} onClick={this.copyToClipboard}>
                {this.state.buttonLabel}
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Lorem;

Lorem.propTypes = {
  loremText: PropTypes.string,
  songList: PropTypes.array
}