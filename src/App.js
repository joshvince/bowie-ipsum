import React, { Component } from 'react';

import Generator from './Generator/Generator.js';

import Lorem from './Homepage/Lorem.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      loremIpsum: null,
      characters: 750
    }
  }

  updateCharacters = (e) => {
    e.preventDefault();
    let chars = parseInt(e.target.value, 10)
    this.setState({characters: chars})
  }

  generateLoremIpsum = (e) => {
    e.preventDefault();
    let generatedLorem = Generator(this.state.characters);
    this.setState({
      songs: generatedLorem.songs,
      loremIpsum: generatedLorem.text
    })
  }

  render() {
    return (
      <div className="container-large">
        <header>
          <h1 className="title">David Bowie</h1>
          <h2 className="subtitle">Lorem Ipsum</h2>
          <div className="form-control">
            <label>How many characters?</label>
            <input type="text" placeholder="750" onChange={this.updateCharacters}/>
            <button
              className="button button-primary button-large"
              onClick={this.generateLoremIpsum}
            >
              Generate
            </button>
          </div>
          {this.state.loremIpsum ?
              <Lorem lorem={this.state.loremIpsum} songs={this.state.songs}/>
              : null}
        </header>
      </div>
    );
  }
}

export default App;
