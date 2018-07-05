import React from 'react';

export const Themes = {
  "aladdin-sane": {
    "name": "aladdin-sane",
    darkRed: '#BD211B',
    lightRed: '#CD0000',
    purple: '#5f5e7b',
    blue: '#2C4D8C',
    lightBlue: '#2C4DAA',
    grey: '#B1A2A7',
    black: '#1f1b1d',
    alt: 'white',
    color: '#BD211B'
  },
  "ziggy-stardust": {
    "name": "ziggy-stardust",
    alt: '#1f1b1d',
    color: 'green'
  },
  "thin-white-duke": {
    "name": "thin-white-duke",
    alt: 'black',
    color: 'white'
  }
}

export const ThemeContext = React.createContext({
  theme: Themes.aladdinSane,
  switchTheme: () => {}
});