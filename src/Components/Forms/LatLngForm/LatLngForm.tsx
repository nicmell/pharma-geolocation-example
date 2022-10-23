import React, {useState} from "react";

import {Button, Stack, TextField} from "@mui/material";

import {LatLngLiteral} from "@/Typings/google-maps";

export type LatLngFormProps = {
  onSubmit?: (value: LatLngLiteral) => void
}

export function LatLngForm({onSubmit}: LatLngFormProps) {
  const [lat, setLat] = useState<number>()
  const [lng, setLng] = useState<number>()
  const handleSubmit = () => {
    onSubmit && onSubmit({lat: lat!, lng: lng!})
  }
  return (
    <Stack direction='column' spacing={4}>
      <TextField
        label='Latitudine'
        onChange={(evt) => setLat(parseFloat(evt.target.value))}
        size='small'
        type='number'
        value={lat}
      />
      <TextField
        label='Longitudine'
        onChange={(evt) => setLng(parseFloat(evt.target.value))}
        size='small'
        type='number'
        value={lng}
      />
      <Button
        disabled={!lat || !lng}
        onClick={handleSubmit}
        size='small'
        variant='contained'
      >
        {'calcola percorso più breve'}
      </Button>
    </Stack>
  )
}
