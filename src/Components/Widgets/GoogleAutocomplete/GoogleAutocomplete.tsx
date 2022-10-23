
import React from 'react'

import {TextField} from "@mui/material";
import {usePlacesWidget} from "react-google-autocomplete";


export default function GoogleAutocomplete() {
  const {ref} = usePlacesWidget({
    apiKey:`${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`,
    options: {types: ["address"]},
  });
  return (
      <TextField
        fullWidth
        inputRef={ref}
        label='Indirizzo'
        variant='outlined'
      />
  )
}
