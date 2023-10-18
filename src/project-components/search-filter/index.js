import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useState, useEffect } from 'react';
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

const SearchFilter = ({handleApply}) => {
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

    // Initial state
    const initialStateQuery = {
        ideas: [],
        currency: 'euro',
        experiences: [],
        location: '',
        airport: '',
        selectedRange: { startDate: null, endDate: null },
        priceRange: [0, 1000],
        bedroom: '',
        adults: 0,
        children: 0,
        infants: 0,
    };

    const [stateQuery, setStateQuery] = useState(initialStateQuery);

    useEffect(() => {
        console.log(stateQuery, 'changed');
    }, [stateQuery]);

    const handleChangeIdeas = (event, newIdea) => {
        setStateQuery({ ...stateQuery, ideas: newIdea });
    };

    const handleChangeCurrency = (event, newCurrency) => {
        setStateQuery({ ...stateQuery, currency: newCurrency });
    };

    const handleChangeExp = (event) => {
        setStateQuery({ ...stateQuery, experiences: event.target.value });
    };

    const handleChangeLocation = (event) => {
        setStateQuery({ ...stateQuery, location: event.target.value });
    };

    const handleChangeBedroom = (event) => {
        setStateQuery({ ...stateQuery, bedroom: event.target.value });
    };

    const handleChangeAirport = (event) => {
        setStateQuery({ ...stateQuery, airport: event.target.value });
    };

    const handleDateRangeChange = (startDate, endDate) => {
        setStateQuery({ ...stateQuery, selectedRange: { startDate, endDate } });
    };

    const handlePriceChange = (event, newValue) => {
        setStateQuery({ ...stateQuery, priceRange: newValue });
    };

    const handleAdultsChange = (val) => {
        setStateQuery({ ...stateQuery, adults: val });
    };

    const handleChildrenChange = (val) => {
        setStateQuery({ ...stateQuery, children: val });
    };

    const handleInfantsChange = (val) => {
        setStateQuery({ ...stateQuery, infants: val });
    };
    
    const handleDeleteExp = (e, value) => {
        e.preventDefault();
        setStateQuery({ ...stateQuery, experiences: (current) => _without(current, value) } );
    };
    
    const handleReset = () => {
        setStateQuery(initialStateQuery);
        handleApply(initialStateQuery);
    };

    const apply = () => {
        handleApply(stateQuery);
    };

    return (
        <div className='search-filter'>
            <FormControl className='mb-4 mobile-groupby-3'>
                <label className='search-filter__label'>Villa Ideas</label>
                <ToggleButtonGroup
                    value={stateQuery.ideas}
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
                    value={stateQuery.experiences}
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
                        <Checkbox color="input" checked={stateQuery.experiences.includes(exp)} />
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
                            value={stateQuery.location}
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
                            value={stateQuery.airport}
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
                        key={'adultinput-'+stateQuery.adults}
                        classes="mb-4"
                        label="Adults"
                        initNum={stateQuery.adults}
                        onValueChange={handleAdultsChange}
                    />
                     <NumericInput
                        key={'childreninput-'+stateQuery.children}
                        classes="mb-4"
                        label="Children (age 2-12)"
                        initNum={stateQuery.children}
                        onValueChange={handleChildrenChange}
                    />
                    <NumericInput
                        key={'infantinput-'+stateQuery.infants}
                        classes="mb-4"
                        label="Infants (age > 2)"
                        initNum={stateQuery.infants}
                        onValueChange={handleInfantsChange}
                    />
                </div>
                <div className='col-5 col-md-3'>
                    <FormControl className='mb-4'>
                        <label className='search-filter__label'>Bedrooms</label>
                        <Select
                            IconComponent={KeyboardArrowDownIcon}
                            value={stateQuery.bedroom}
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
                            value={stateQuery.currency}
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
                        value={stateQuery.priceRange}
                        onChange={handlePriceChange}
                        getAriaValueText={pricetext}
                        valueLabelDisplay="on"
                 
                    />
                </div>
            </div>

            <div className='search-filter__actions mt-5 d-flex flex-md-column align-items-center'>
                <Button onClick={apply} disableElevation size="large" 
                    variant="contained" color="secondary"
                >
                    Apply filter
                </Button>
                <Button onClick={handleReset} className='mt-3' disableElevation size="small" 
                    variant="text" color="secondary"
                >
                    Reset filter
                </Button>
            </div>

            
        </div>
        
    );

};


export default SearchFilter;