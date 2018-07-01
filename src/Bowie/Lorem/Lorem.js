import React from 'react';
import PropTypes from 'prop-types';

import './Lorem.css';

const Lorem = ({era, loremText, songList}) => {
  return (
    <div id="lorem-container">
      <p className={`lorem-text ${era}`}>{loremText}</p>
    </div>
  );
};

export default Lorem;

Lorem.propTypes = {
  loremText: PropTypes.string,
  songList: PropTypes.array
}