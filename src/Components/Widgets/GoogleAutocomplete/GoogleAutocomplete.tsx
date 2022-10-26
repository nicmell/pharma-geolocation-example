
import React, {ChangeEventHandler, ForwardedRef, forwardRef, useImperativeHandle} from 'react'

import {TextField} from "@mui/material";
import {usePlacesWidget} from "react-google-autocomplete";

import {PlaceResult} from "@/Typings/google-maps";

export type GoogleAutocompleteProps = {
  onPlaceSelected?: (value: PlaceResult) => void
  onChange?: ChangeEventHandler<HTMLInputElement>
}

function GoogleAutocomplete({onPlaceSelected, onChange}: GoogleAutocompleteProps, ref: ForwardedRef<unknown>) {
  const {ref: inputRef} = usePlacesWidget({
    apiKey:`${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`,
    options: {types: ["address"]},
    onPlaceSelected: (place) => onPlaceSelected && onPlaceSelected(place),
  });
  useImperativeHandle(ref, () => inputRef.current as unknown as HTMLInputElement);
  return (
      <TextField
        fullWidth
        inputRef={inputRef}
        label='Indirizzo'
        onChange={onChange}
        size='small'
        variant='outlined'
      />
  )
}

export default forwardRef(GoogleAutocomplete)

