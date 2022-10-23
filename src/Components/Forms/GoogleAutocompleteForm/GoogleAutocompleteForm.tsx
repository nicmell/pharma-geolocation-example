import React, {useState} from "react";

import {Button, Stack} from "@mui/material";

import GoogleAutocomplete from "@/Components/Widgets/GoogleAutocomplete/GoogleAutocomplete";
import {LatLngLiteral, PlaceResult} from "@/Typings/google-maps";

export type LatLngFormProps = {
  onSubmit?: (value: LatLngLiteral) => void
}

export function GoogleAutocompleteForm({onSubmit}: LatLngFormProps) {
  const [value, setValue] = useState<LatLngLiteral>()
  const handleSubmit = () => {
    onSubmit && onSubmit(value!)
  }
  const handlePlaceSelected = (value: PlaceResult) => {
    const location = value.geometry?.location
    location && setValue({lat: location.lat(), lng: location.lng()})
  }
  return (
    <Stack direction='column' spacing={4}>
      <GoogleAutocomplete onPlaceSelected={handlePlaceSelected}/>
      <Button
        disabled={!value}
        onClick={handleSubmit}
        size='small'
        variant='contained'
      >
        {'calcola percorso più breve'}
      </Button>
    </Stack>
  )
}
