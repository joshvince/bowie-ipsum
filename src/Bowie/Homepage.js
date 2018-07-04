import React, { Component } from 'react';

import Generator from '../Generator/Generator';

import Selectors from './Selectors/Selectors';
import Lorem from './Lorem/Lorem';

import './grid.css';
import './Homepage.css';


class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      showLorem: false,
      loremText: null,
      loremSongs: null,
      era: "aladdin-sane"
    }

    this.loremRef = null;

    this.setLoremRef = el => {
      this.loremRef = el;
    }
  }

  generateLorem = (selectorResult) => {
    let result = Generator(selectorResult.chars, selectorResult.era);
    this.setState({
      showLorem: true,
      era: selectorResult.era,
      loremText: result.text,
      loremSongs: result.songs
    })
    this.loremRef.scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <div id="page-container">
        <div className="grid-container centered">
          <div className="full-width-box headline">
            <h1>Bowie Ipsum</h1>
          </div>
          <div className="full-width-box">
            <p className="highlight">A David Bowie themed Lorem Ipsum generator</p>
          </div>
          <Selectors submitHandler={this.generateLorem}/>
          <div ref={this.setLoremRef} className="full-width-box">
            {this.state.showLorem ?
              <Lorem
                loremText={this.state.loremText}
                songList={this.state.loremSongs}
                era={this.state.era}
              />
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;