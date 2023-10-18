import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useState } from 'react';
import { Box, Button, FormControl, InputAdornment, InputLabel, ListItemText, MenuItem, Select, Slider, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import _without from "lodash/without";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DateRangePicker from '../../components/date-range';
import NumericInput from '../../components/numeric-input';


function pricetext(value) {
    return `${value}€`;
}

const SearchFilter = ({}) => {

    var optionsCurrency = [
        {
            'label': '€',
            'value': 'euro'
        },
        {
            'label': '$',
            'value': 'dollar'
        },
        {
            'label': '£',
            'value': 'GBP'
        },
        {
            'label': '¥',
            'value': 'yen'
        },
    ];
    var optionsIdeas = [
        {
            'label': 'Pool',
            'value': 'pool'
        },
        {
            'label': 'Luxury',
            'value': 'luxury'
        },
        {
            'label': 'Seaview',
            'value': 'seaview'
        },
        {
            'label': 'Couples',
            'value': 'couples'
        },
        {
            'label': 'Large',
            'value': 'large'
        },
        {
            'label': 'Family',
            'value': 'family'
        }
    ];

    const experiencesOpts = [
        "Cooking Experience",
        "Sicily outdoors",
        "Etna walk",
    ];
    
    const [ideas, setIdeas] = useState(() => ['pool', 'luxury']);
    const [currency, setCurrency] = useState('euro');

    const [experiences, setExperiences] = useState([]);
    const [location, setLocation] = React.useState('');
    const [airport, setAirport] = React.useState('');
    const [selectedRange, setSelectedRange] = useState({ startDate: null, endDate: null });
    const [priceRange, setPriceRange] = React.useState([20, 37]);

    const [bedroom, setBedroom] = React.useState('');


    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    
    const handleChangeCurrency = (event, newCurrency) => {
        setCurrency(newCurrency);
    }

    const handleDateRangeChange = (startDate, endDate) => {
      setSelectedRange({ startDate, endDate });
    };
    
      
    const handleChangeLocation = (event) =>  {
        setLocation(event.target.value);
    }
    const handleChangeBedroom = (event) =>  {
        setBedroom(event.target.value);
    }
    const handleChangeAirport = (event) =>  {
        setAirport(event.target.value);
    }

    const handleChangeExp = (event) => {
        setExperiences(event.target.value);
    };

    const handleDeleteExp = (e, value) => {
        e.preventDefault();
        console.log("clicked delete");
        setExperiences((current) => _without(current, value));
    };

    const handleChangeIdeas = (event, newIdea) => {
        setIdeas(newIdea);
    }
    const [adults, setAdults] = React.useState(0);

    const handleAdultsChange = (val) => {
        console.log(val);
        setAdults(val);
    }


    return (
        <div className='search-filter'>
            <FormControl className='mb-4 mobile-groupby-3'>
                <label className='search-filter__label'>Villa Ideas</label>
                <ToggleButtonGroup
                    value={ideas}
                    onChange={handleChangeIdeas}
                    aria-label="Villa Ideas"
                >
                {
                optionsIdeas.map((opt, idx) => (
                    <ToggleButton key={"idea-btn-"+idx} value={opt.value} aria-label={opt.label}>
                        {opt.label}
                    </ToggleButton>
                ))
                }
                </ToggleButtonGroup>
            </FormControl>
            <FormControl className='mb-4'>
                <label className='search-filter__label'>Experience</label>
                <Select
                    labelId="demo-mutiple-chip-checkbox-label"
                    id="demo-mutiple-chip-checkbox"
                    multiple
                    value={experiences}
                    onChange={handleChangeExp}
                    onOpen={() => console.log("select opened")}
                    IconComponent={KeyboardArrowRightIcon}
                    renderValue={(selected) => (
                    <div>
                        {(selected).map((value) => (
                        <Chip
                            key={value}
                            label={value}
                            clickable
                            deleteIcon={
                            <CloseIcon
                                onMouseDown={(event) => event.stopPropagation()}
                            />
                            }
                          
                            onDelete={(e) => handleDeleteExp(e, value)}
                            onClick={() => console.log("clicked chip")}
                        />
                        ))}
                    </div>
                    )}
                >
                    {experiencesOpts.map((exp) => (
                    <MenuItem key={exp} value={exp}>
                        <Checkbox color="input" checked={experiences.includes(exp)} />
                        <ListItemText primary={exp} />
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <hr></hr>

            <div className="row">
                <div className="col-12 col-md-6">
                    <FormControl className='mb-4'>
                        <label className='search-filter__label'>Search by Location</label>
                        <Select
                            IconComponent={KeyboardArrowDownIcon}
                            value={location}
                            onChange={handleChangeLocation}
                        >
                            <MenuItem value={'south-sicily'}>South Sicily</MenuItem>
                            <MenuItem value={'east-sicily'}>East Sicily</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-12 col-md-6">
                    <FormControl className='mb-4'>
                        <label className='search-filter__label'>Search by Airport</label>
                        <Select
                            IconComponent={KeyboardArrowDownIcon}
                            value={airport}
                            onChange={handleChangeAirport}
                        >
                            <MenuItem value={'ct'}>Catania</MenuItem>
                            <MenuItem value={'pa'}>Palermo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>



            <DateRangePicker
                onDateRangeChange={handleDateRangeChange} 
            />
            
            <div className='row mt-4'>
                <div className='col-12 col-md-9 d-md-flex'>
                    <NumericInput
                        classes="mb-4"
                        label="Adults"
                        onValueChange={handleAdultsChange}
                    />
                     <NumericInput
                        classes="mb-4"
                        label="Children (age 2-12)"
                        onValueChange={handleAdultsChange}
                    />
                    <NumericInput
                        classes="mb-4"
                        label="Infants (age > 2)"
                        onValueChange={handleAdultsChange}
                    />
                </div>
                <div className='col-5 col-md-3'>
                    <FormControl className='mb-4'>
                        <label className='search-filter__label'>Bedrooms</label>
                        <Select
                            IconComponent={KeyboardArrowDownIcon}
                            value={bedroom}
                            onChange={handleChangeBedroom}
                        >
                            <MenuItem value={'2-3'}>2-3</MenuItem>
                            <MenuItem value={'4-5'}>4-5</MenuItem>
                            <MenuItem value={'6-7'}>6-7</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='col-7 col-md-4'>
                    <FormControl className='mb-4'>
                        <label className='search-filter__label'>Currency</label>
                        <ToggleButtonGroup
                            exclusive
                            value={currency}
                            onChange={handleChangeCurrency}
                            aria-label="Currency"
                        >
                        {
                        optionsCurrency.map((opt, idx) => (
                            <ToggleButton key={"idea-btn-"+idx} value={opt.value} aria-label={opt.label}>
                                {opt.label}
                            </ToggleButton>
                        ))
                        }
                        </ToggleButtonGroup>
                    </FormControl>
                </div>
                <div className='col-12 col-md-8'>
                    <label className='search-filter__label'>Price range</label>
                    <Slider
                        color="input"
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={handlePriceChange}
                        getAriaValueText={pricetext}
                        valueLabelDisplay="on"
                 
                    />
                </div>
            </div>

            <div className='search-filter__actions mt-5 d-flex flex-md-column align-items-center'>
                <Button disableElevation size="large" variant="contained" color="secondary">Apply filter</Button>

                <Button className='mt-3' disableElevation size="small" variant="text" color="secondary">Reset filter</Button>
            </div>

            
        </div>
        
    );

};


export default SearchFilter;