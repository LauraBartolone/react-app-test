import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useState } from 'react';
import { FormControl, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import _without from "lodash/without";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SearchFilter = ({}) => {
    const [ideas, setIdeas] = useState(() => ['pool', 'luxury']);
    const [experiences, setExperiences] = useState([]);

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
    
    
    return (
        <div className='search-filter'>
            <FormControl className='mb-3'>
                
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
            <FormControl className='mb-3'>
                <label className='search-filter__label'>Experience</label>
                <Select
                    labelId="demo-mutiple-chip-checkbox-label"
                    id="demo-mutiple-chip-checkbox"
                    multiple
                    value={experiences}
                    onChange={handleChangeExp}
                    onOpen={() => console.log("select opened")}
                    //input={<Input />}
                    // MenuProps={MenuProps}
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
        </div>
        
    );

};


export default SearchFilter;