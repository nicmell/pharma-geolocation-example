import React, {PropsWithChildren} from "react";

import {Button, Stack, TextField} from "@mui/material";

import useForm from "@/Hooks/useForm";
import {LatLngLiteral} from "@/Typings/google-maps";

export type LatLngFormProps = PropsWithChildren<{
  onSubmit?: (value: LatLngLiteral) => void
  disabled?: boolean
}>

export function LatLngForm({children, disabled, onSubmit}: LatLngFormProps) {
  const {input, setInput} = useForm()
  const lat = typeof input === 'object' ? input.lat: undefined
  const lng = typeof input === 'object' ? input.lng: undefined
  const handleSubmit = () => {
    onSubmit && onSubmit({lat, lng})
  }
  const handleChange = (type: keyof LatLngLiteral) =>
    (evt:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = evt.target.value
      setInput({
        lat: type === 'lat' ? value : lat,
        lng: type === 'lng' ? value : lng
      })
  }
  return (
    <Stack direction='column' spacing={4}>
      <TextField
        InputLabelProps={{shrink: true}}
        label='Latitudine'
        onChange={handleChange('lat')}
        size='small'
        type='number'
        value={lat}
      />
      <TextField
        InputLabelProps={{shrink: true}}
        label='Longitudine'
        onChange={handleChange('lng')}
        size='small'
        type='number'
        value={lng}
      />
      {children}
      <Button
        disabled={disabled}
        onClick={handleSubmit}
        size='small'
        variant='contained'
      >
        {'calcola percorso più breve'}
      </Button>
    </Stack>
  )
}
