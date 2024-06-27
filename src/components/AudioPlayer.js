import React, { useState } from 'react';

const AudioPlayer = ({ audioUrl, videoOption }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audio = new Audio(audioUrl);
    audio.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="audio-player">
      <div className="player-controls">
        {!isPlaying ? (
          <button className="btn btn-primary" onClick={handlePlay}>Play Audio</button>
        ) : (
          <button className="btn btn-secondary" onClick={handlePause}>Pause Audio</button>
        )}
      </div>
      <div className="video-player">
        {isPlaying && (
          <video width="320" height="240" controls>
            <source src={`path_to_${videoOption}_video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
