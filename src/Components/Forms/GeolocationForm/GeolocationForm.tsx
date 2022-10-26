import React from "react";

import {Button} from "@mui/material";

import {GoogleAutocompleteForm} from "@/Components/Forms/GoogleAutocompleteForm/GoogleAutocompleteForm";
import {LatLngForm} from "@/Components/Forms/LatLngForm/LatLngForm";
import useAppSettings from "@/Hooks/useAppSettings";
import {LatLngLiteral} from "@/Typings/google-maps";



export type GeolocationFormProps = {
  onSubmit?: (value: LatLngLiteral) => void
}

export default function GeolocationForm ({onSubmit}: GeolocationFormProps) {
  const {useCoordinates} = useAppSettings()
  const FormComponent = useCoordinates ? LatLngForm : GoogleAutocompleteForm
  const handleSubmit = (latLng: LatLngLiteral) => {
    onSubmit && onSubmit(latLng)
  }
  return (
    <FormComponent onSubmit={handleSubmit}>
      <Button size='small' variant='outlined'>
        {'Usa posizione attuale'}
      </Button>
    </FormComponent>
  )
}
