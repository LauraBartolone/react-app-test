import SearchFilter from '../project-components/search-filter';
import VillaCard from '../project-components/villa-card';
import React, { useState } from 'react';
import { Button, Drawer, FormControl, IconButton, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaceIcon from '@mui/icons-material/Place';
import WindowIcon from '@mui/icons-material/Window';

const Search = () => {

  let results= 12;
  const villas = [
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 5.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
  
  ];


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [ordering, setOrdering] = React.useState('price_asc');

  const handleChangeOrdering = (event) => {
    setOrdering(event.target.value);
  };


  const handleClose = (value) => {
    setOpen(false);
  };


    return (
    <>
      <div className="container filter-list">

        <div className='d-flex d-lg-none '>  
          <Button className="w-100 me-2" onClick={handleClickOpen} disableElevation size="medium" variant="outlined" color="tertiary">Filtra</Button>
          <Button className="w-100 ms-2" disableElevation size="medium" variant="outlined" color="tertiary">Ordina</Button>
        </div>

        <div className="row mb-5 mt-5">
          <div className="col-12 col-md-6 filter-list__heading">
            <h1 className='t-headline-1 '>Villas in East Sicily</h1>
            <p>{results} result(s) found</p>
          </div>
          <div className='col-12 col-md-6 search-filter d-flex align-items-end justify-content-end'>
            <FormControl className='mb-4 me-2'>
                <label className='search-filter__label mt-4'>Order by</label>
                <Select size="small"
                    IconComponent={KeyboardArrowDownIcon}
                    value={ordering}
                    onChange={handleChangeOrdering}
                >
                    <MenuItem value={'price_asc'}>Increasing price</MenuItem>
                    <MenuItem value={'price_dsc'}>Decreasing price</MenuItem>
                </Select>
            </FormControl>
            <FormControl className='mb-4'>

              <ToggleButtonGroup
                value="grid"
                exclusive
                aria-label="text alignment"
              >
                <ToggleButton size="small" value="grid" aria-label="grid layout">
                  <WindowIcon />
                </ToggleButton>

                <ToggleButton size="small" value="list" aria-label="location">
                  <PlaceIcon />
                </ToggleButton>
                
              </ToggleButtonGroup>
            </FormControl>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-lg-1 filter-list__filter-col'>
            <button className="d-none d-lg-block btn btn-primary btn-search" onClick={handleClickOpen}>
              Filter search
            </button>
            <Drawer onClose={handleClose} open={open} className="drawer--xl">
              <div className='drawer__header'>
                <p className='mb-0'>Filter</p>
                <IconButton className='drawer__close' onClick={handleClose} aria-label="Close">
                  <CloseIcon data-bs-dismiss="modal"></CloseIcon>
                </IconButton>
              </div>

              <div className="p-4">
                <SearchFilter></SearchFilter>
              </div>
            </Drawer>
          </div>
          <div className='col-12 col-lg-11'>

            <div className="row"> 
                
                {villas && villas.map(villa => (
                  <div className='col-12 col-md-6 mb-4'>
                    <VillaCard
                      cta={{
                        url: '#',
                      }}
                      villa={villa}
                      
                    ></VillaCard>
                  </div>
                ))
                }
            </div>
         
          </div>
          
          
        </div>
      </div>
    </>
    );

  };
  
  export default Search;