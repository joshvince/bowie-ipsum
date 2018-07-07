import React from 'react';
import {ThemeContext} from './theme-context';
import './App.css';

const Footer = () => {
  return (
    <ThemeContext>
      {
      ({theme}) => (
        <footer
          className="catamaran"
          style={{color: theme.alt, backgroundColor: theme.color}}
        ><a href="http://joshvince.site">
          Made with love by Josh. <br/>Please don't sue me, Ghost Bowie.
        </a></footer>
      )}
    </ThemeContext>
  );
};

export default Footer;