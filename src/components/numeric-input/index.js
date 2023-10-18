import React, { useState } from 'react';
import {InputAdornment, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function NumericInput({ onValueChange, label, classes='', initNum=0 }) {
  const [inputNum, setInputNum] = useState(initNum);

  const subtract = () => {
    if (inputNum !== 0) {
      setInputNum(inputNum - 1);
      onValueChange(inputNum - 1);

    }
  };

  const add = () => {
    setInputNum(inputNum + 1);
    onValueChange(inputNum + 1);

  };

  return (
  <div className={classes}>
    {label && <label className='search-filter__label'>{label}</label>}

    <TextField
      inputProps={{ type: 'number', pattern: '[0-9]*' }}
      value={inputNum}
      InputProps={{
        endAdornment: (
          <InputAdornment  position="end">
            <RemoveIcon className='numeric-input__icon' onClick={subtract} />
            <AddIcon className='numeric-input__icon' onClick={add} />
          </InputAdornment>
        ),
      }}
    />
  </div>
  );
}

export default NumericInput;
