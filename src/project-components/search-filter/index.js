import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useState } from 'react';

const SearchFilter = ({}) => {
    const [ideas, setIdeas] = React.useState(() => ['pool', 'luxury']);

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
    

    const handleChangeIdeas = (event, newIdea) => {
        setIdeas(newIdea);
    }
    
    
    return (
        <ToggleButtonGroup
            value={ideas}
            onChange={handleChangeIdeas}
            aria-label="Villa Ideas"
        >
            {
                optionsIdeas.map(opt => (

                    <ToggleButton value={opt.value} aria-label={opt.label}>
                        {opt.label}
                    </ToggleButton>
                ))
            }
           
        </ToggleButtonGroup>
        
    );

};


export default SearchFilter;