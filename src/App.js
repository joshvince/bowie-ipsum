import React, { Component } from 'react';
import {ThemeContext, Themes} from './theme-context';
import './App.css';
import Homepage from './Bowie/Homepage';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);

    this.switchTheme = (newTheme) => {
      this.setState({
        theme: Themes[newTheme]
      })
    }

    this.state = {
      theme: Themes["aladdin-sane"],
      switchTheme: this.switchTheme
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div
          id="app-container"
          style={{backgroundColor: this.state.theme.alt}}
        >
          <Homepage />
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
