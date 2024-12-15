import React, { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { StyledSearchBox, StyledTextField } from './ModuleSearchStyles';


export default function Search({ placeholder = 'Search...', onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <StyledSearchBox>
      <StyledTextField
        value={query}
        onChange={handleInputChange}
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#72F8FF' }} />
            </InputAdornment>
          ),
          endAdornment: query && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} size="small">
                <ClearIcon sx={{ color: '#72F8FF' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </StyledSearchBox>
  );
}