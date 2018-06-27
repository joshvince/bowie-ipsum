import React, { Component } from 'react';
import './styles.css';

class Lorem extends Component {
  constructor(props){
    super(props)
    this.state = {tooltip: null}
  }

  copyToClipboard = (e) => {
    this.loremText.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({
      tooltip: "Copied to clipboard."
    })
  }

  render() {
    return (
      <div className="">
        <h2 className="panel-title">Your Generated Lorem Ipsum</h2>
        <div className="flexRow alignedRight">
          <ul className="tags">
            {this.props.songs.map(title => {
              return <li className="tag tag-blue">{title}</li>
            })}
          </ul>
        </div>
          <textarea ref={text => this.loremText = text}>
            {this.props.lorem}
          </textarea>
        <div className="panel-footer">
          <button className="button-primary" onClick={this.copyToClipboard}>
            Copy
          </button>
        </div>
      </div>
    );
  }
}

export default Lorem;