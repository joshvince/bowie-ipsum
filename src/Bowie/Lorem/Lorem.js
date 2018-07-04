import React from 'react';
import PropTypes from 'prop-types';

import './Lorem.css';

const Lorem = ({era, loremText, songList}) => {
  return (
    <div id="lorem-container">
      <p className={`lorem-text ${era}`} contentEditable="true">{loremText}</p>
      <div className="song-list">
        {songList.map((song, i) => {
          return <div key={i} className={`song catamaran ${era}`}>{song}</div>
        })}
      </div>
    </div>
  );
};

export default Lorem;

Lorem.propTypes = {
  loremText: PropTypes.string,
  songList: PropTypes.array
}