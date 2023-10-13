import React, { useState, useRef } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StraightIcon from '@mui/icons-material/Straight';
const VideoHero = ({videoUrl, text}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
  <div className="video-hero">
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoUrl}
          loop
          muted
          controls={false}
          loading="lazy"
      />
      </div>
      <div className="text-overlay">
        <h1 className='mb-5'>{text}</h1>
        {isPlaying ? (
          <PauseCircleOutlineIcon
            role="button"
            onClick={toggleVideo}
            style={{ fontSize: '48px', cursor: 'pointer' }}
          />
        ) : (
          <PlayCircleOutlineIcon
            role="button"
            onClick={toggleVideo}
            style={{ fontSize: '48px', cursor: 'pointer' }}
          />
        )}
      </div>
      
      <StraightIcon className='load-more-icon'></StraightIcon>
  </div>
  );
};

export default VideoHero;
