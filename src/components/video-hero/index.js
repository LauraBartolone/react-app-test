import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const VideoHero = () => {

  return (
    <div className="video-hero">
        <div className="video-container">
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                controls={false}
            />
        </div>
        <div className="text-overlay">
            <h1>{text}</h1>
        </div>
    </div>
  );
};

export default VideoHero;
