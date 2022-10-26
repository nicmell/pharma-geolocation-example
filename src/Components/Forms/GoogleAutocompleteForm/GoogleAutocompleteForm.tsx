import React, {ChangeEvent, PropsWithChildren, useEffect, useRef, useState} from "react";

import {Button, Stack} from "@mui/material";

import GoogleAutocomplete from "@/Components/Widgets/GoogleAutocomplete/GoogleAutocomplete";
import useForm from "@/Hooks/useForm";
import googleMapsClient from "@/Services/googleMapsClient";
import {LatLngLiteral, PlaceResult} from "@/Typings/google-maps";

export type LatLngFormProps = PropsWithChildren<{
  disabled?: boolean
  onSubmit?: (value: LatLngLiteral) => void
}>

export function GoogleAutocompleteForm({children, disabled, onSubmit}: LatLngFormProps) {
  const ref = useRef<HTMLInputElement>()
  const {input, setInput, setError} = useForm()
  const [value, setValue] = useState<PlaceResult>()

  const handleSubmit = async () => {
    let location = value?.geometry?.location
    if (location){
      onSubmit && onSubmit({lat: location.lat(), lng: location.lng()})
    } else {
      try {
        const {results} = await googleMapsClient.geocode(ref.current!.value)
        location = results[0].geometry.location
        onSubmit && onSubmit({lat: location.lat(), lng: location.lng()})
      } catch (err) {
        setError(err as Error)
      }
    }
  }
  const handlePlaceSelected = (placeResult: PlaceResult) => {
    if (ref.current && placeResult && placeResult.formatted_address) {
      setInput(placeResult.formatted_address)
    }
    setValue(placeResult)
  }

  useEffect(() => {
    if (ref.current && typeof input === 'string') {
      ref.current.value = input
    }
  }, [input])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value)
  }

  return (
    <Stack direction='column' spacing={4}>
      <GoogleAutocomplete onChange={handleChange} onPlaceSelected={handlePlaceSelected} ref={ref}/>
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
