import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClickAwayListener, Input, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [validationError, setValidationError] = useState('');


  const [openStart, setOpenStart] = React.useState(false);
  const [openEnd, setOpenEnd] = React.useState(false);


  const handleStartDateChange = (date) => {
    console.log(date);
    setStartDate(date);
    // validateDateRange(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    validateDateRange(startDate, date);
  };

  const validateDateRange = (start, end) => {
    if (start && end && start > end) {
      setValidationError('La data di inizio non può essere successiva alla data di fine');
    } else {
      setValidationError('');
    }
  };

  return (
    <div className='date-range'>
        <div className="row">
            <div className="col-6">
                <label className='search-filter__label'>Check in</label>
            </div>
            <div className="col-6">
                <label className='search-filter__label'>Check out</label>
            </div>
        </div>
            <div className="date-range__pickers">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                   
                    <ClickAwayListener
                        disableReactTree={true}
                        mouseEvent="false"
                        onClickAway={() => setOpenStart(false)}
                    >
                        <DatePicker
                            value={startDate}
                            disablePast
                            autoOk
                            open={openStart}
                            onOpen={() => setOpenStart(true)}
                            onClose={() => setOpenStart(false)}
                            onChange={date => {
                                handleStartDateChange(date);
                            }}
                           
                            renderInput={props => (
                                <TextField {...props}  onClick={() => {
                                    setOpenStart(true)}} />
                            )}
                        />
                    </ClickAwayListener>

                    <ClickAwayListener
                        disableReactTree={true}
                        mouseEvent="false"
                        onClickAway={() => setOpenEnd(false)}
                    >
                        <DatePicker
                            value={endDate}
                            disablePast
                            autoOk
                            open={openEnd}
                            onOpen={() => setOpenEnd(true)}
                            onClose={() => setOpenEnd(false)}
                            onChange={date => {
                                handleEndDateChange(date);
                            }}

                            renderInput={props => (
                                <TextField {...props} onClick={() => {setOpenEnd(true)}}/>
                            )}
                        />
                    </ClickAwayListener>
                    
        
                </LocalizationProvider>
            </div>
      {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
    </div>
  );
}

export default DateRangePicker;
