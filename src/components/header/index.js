import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const [language, setLanguage] = React.useState('it'); 
    
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };

  return (
    <header className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo"/>
            </a>

           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <MenuIcon/>
            </button>
            
            <button className="btn btn-outline-primary d-block d-lg-none">Login</button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Destinations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Villas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Guides</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Journal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <div className="language-switch">
                        <Select
                            label="Select Language"
                            value={language}
                            onChange={handleChange}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            IconComponent={KeyboardArrowDownIcon} // Icona di dropdown
                        >
                            <MenuItem value="it">It</MenuItem>
                            <MenuItem value="en">En</MenuItem>
                        </Select>
                    </div>
                    <div className="search-icon">
                        <SearchIcon/>
                    </div>
                    <button className="btn btn-outline-primary">Login</button>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
