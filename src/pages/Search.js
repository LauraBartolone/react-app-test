import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import SideModal from '../components/side-modal';
import SearchFilter from '../project-components/search-filter';
import VillaCard from '../project-components/villa-card';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Dialog, DialogTitle, Drawer, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Search = () => {

  let results= 12;
  const villas = [
    {
      image:"https://www.hotel-quelle.com/images/content/1368232_67898_2_C_1920_1080_967_476468147/qsm23-0969.jpg",
      imageAlt:"alt image",
      name: "Barresa",
      place: "Titolo della Card",
      prize: {
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
      prize: {
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
      prize: {
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
      prize: {
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

  const handleClose = (value) => {
    setOpen(false);
  };


    return (
    <>
      <div className="container filter-list">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className='t-headline-1 mt-5'>Villas in East Sicily</h1>
            <p>{results} result(s) found</p>
          </div>
          <div></div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-1 filter-list__filter-col'>
            <button className="btn btn-primary btn-search" onClick={handleClickOpen}>
              Filter search
            </button>
            <Drawer onClose={handleClose} open={open}>

              <div class="p-4">
                <button type="button" className="btn" onClick={handleClose} aria-label="Close">
                  <CloseIcon data-bs-dismiss="modal"></CloseIcon>
                </button>

                <SearchFilter></SearchFilter>
              </div>
            </Drawer>
          </div>
          <div className='col-12 col-md-11'>

            <div className="row"> 
                
                {villas && villas.map(villa => (
                  <div className='col-12 col-md-6'>
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