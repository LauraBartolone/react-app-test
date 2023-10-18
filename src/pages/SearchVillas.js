import SearchFilter from '../project-components/search-filter';
import VillaCard from '../project-components/villa-card';
import React, { useState } from 'react';
import { Button, Drawer, FormControl, IconButton, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaceIcon from '@mui/icons-material/Place';
import WindowIcon from '@mui/icons-material/Window';

const Search = () => {

  const villasInit = [
    {
      id: 1,
      image:"https://www.theploumanach.com/cdn/shop/articles/5-best-luxury-resorts-in-sicily_1500x.jpg?v=1597227452",
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
      id: 2,
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 15.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      id: 3,
      image:"https://www.thelostavocado.com/wp-content/uploads/2023/03/i-migliori-resort-in-sicilia-sul-mare-1160x773.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 35.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      id: 4,
      image:"https://www.resort-sicilia.it/f/pagine-tematiche/5-stelle-lusso-[500x350].jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 65.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      id: 5,
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 85.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
    {
      id: 6,
      image:"https://www.theploumanach.com/cdn/shop/articles/5-best-luxury-resorts-in-sicily_1500x.jpg?v=1597227452",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      price: {
        total: 95.12,
        currency: '€'
      },
      description: "Lorem / Ipsum dolor / sit",
      beds: 4,
      guests: 4,
      bathroom: 2
    },
  ];


  const [villas, setVillas] = useState(villasInit);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [ordering, setOrdering] = useState('price_asc');

  const handleChangeOrdering = (event) => {
    setOrdering(event.target.value);
    // FAKE ordering
    // TODO: ajax query
    if(event.target.value == 'price_asc') {
      villas.sort((a, b) => a.price.total - b.price.total);
    } else {
      villas.sort((a, b) => b.price.total - a.price.total);
    }
    setVillas(villas);
  };


  const handleClose = (value) => {
    setOpen(false);
  };

  const handleApply = (value) => {
    // FAKE random villas element
    // TODO: ajax query ApiService.getVillas(new URLSearchParams(value).toString())
    var randomLength = Math.floor(Math.random() * villasInit.length);
    var randomVilla = Array.from({ length: randomLength }, () => {
      const index = Math.floor(Math.random() * villasInit.length);
      return villasInit.splice(index, 1)[0];
    });
    setVillas(randomVilla);
  };


  return (
  <>
    <div className="container filter-list">

      <div className='d-flex d-lg-none '>  
        <Button className="w-100 me-2" onClick={handleClickOpen} 
          disableElevation 
          size="medium" variant="outlined" color="tertiary"
        >
          Filtra
        </Button>
        <Button className="w-100 ms-2" 
          disableElevation 
          size="medium" variant="outlined" color="tertiary"
        >
          Ordina
        </Button>
      </div>

      <div className="row mb-5 mt-5">
        <div className="col-12 col-md-6 filter-list__heading">
          <h1 className='t-headline-1 '>Villas in East Sicily</h1>
          <p>{villas.length} result(s) found</p>
        </div>
        <div className='col-12 col-md-6 search-filter d-none d-lg-flex align-items-end justify-content-end'>
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
              <SearchFilter handleApply={handleApply}></SearchFilter>
            </div>
          </Drawer>
        </div>
        <div className='col-12 col-lg-11'>

          <div className="row"> 
              
              {villas && villas.length> 0 && villas.map(villa => (
                <div className='col-12 col-md-6 mb-4' key={"villacard-"+villa?.id}>
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