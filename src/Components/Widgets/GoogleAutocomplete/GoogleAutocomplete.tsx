
import React from 'react'

import {TextField} from "@mui/material";
import {usePlacesWidget} from "react-google-autocomplete";

import {PlaceResult} from "@/Typings/google-maps";

export type GoogleAutocompleteProps = {
  onPlaceSelected?: (value: PlaceResult) => void
}

export default function GoogleAutocomplete({onPlaceSelected}: GoogleAutocompleteProps) {
  const {ref} = usePlacesWidget({
    apiKey:`${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`,
    options: {types: ["address"]},
    onPlaceSelected: (place) => onPlaceSelected && onPlaceSelected(place),
  });
  return (
      <TextField
        fullWidth
        inputRef={ref}
        label='Indirizzo'
        size='small'
        variant='outlined'
      />
  )
}
