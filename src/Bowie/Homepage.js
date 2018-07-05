import React, { Component } from 'react';
import {ThemeContext} from '../theme-context';
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
      <ThemeContext.Consumer>
        {({theme}) => (
          <div id="content-container" style={{backgroundColor: theme.alt}}>
            <div className="grid-container centered">
              <div className="full-width-box headline">
                <h1 style={{color: theme.color}}>Bowie Ipsum</h1>
              </div>
              <div className="full-width-box">
                <p className="subheader" style={{color: theme.color}}>
                  A David Bowie themed Lorem Ipsum generator
                </p>
              </div>
              <Selectors submitHandler={this.generateLorem}/>
              <div ref={this.setLoremRef} className="full-width-box">
                {this.state.showLorem ?
                  <Lorem loremText={this.state.loremText} songList={this.state.loremSongs}/>
                  :
                  null
                }
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Homepage;