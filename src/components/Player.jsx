import React from 'react';
import ReactPlayer from 'react-player';
import './Player.css';

function Player(parms) {
  const url = parms.url;
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        playsinline={true}
        config={{
          file: {
            forceHLS: true
          }
        }}
      />
    </div>
  );
}

export default Player;
