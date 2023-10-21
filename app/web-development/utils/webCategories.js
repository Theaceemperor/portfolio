'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function WebCategories({onChange,className,options,value,label}) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        value={value}
        className={`${className}`}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={`${label}`} />}
      />
    </div>
  );
}