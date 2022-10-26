import React from "react";


import {GoogleAutocompleteForm} from "@/Components/Forms/GoogleAutocompleteForm/GoogleAutocompleteForm";
import {LatLngForm} from "@/Components/Forms/LatLngForm/LatLngForm";
import GeolocationButton from "@/Components/Widgets/GeolocationButton/GeolocationButton";
import useAppSettings from "@/Hooks/useAppSettings";
import useComputeMinimumDistance from "@/Hooks/useComputeMinimumDistance";
import useForm from "@/Hooks/useForm";
import {LatLngLiteral} from "@/Typings/google-maps";



export type GeolocationFormProps = {
  onSubmit?: (value: LatLngLiteral) => void
}

export default function GeolocationForm ({onSubmit}: GeolocationFormProps) {
  const {useCoordinates} = useAppSettings()
  const {input} = useForm()
  const computeMinimumDistance = useComputeMinimumDistance()
  const FormComponent = useCoordinates ? LatLngForm : GoogleAutocompleteForm
  const disabled = typeof input === 'object' ? !input.lat || !input.lng : !input

  return (
    <FormComponent disabled={disabled} onSubmit={computeMinimumDistance}>
      <GeolocationButton/>
    </FormComponent>
  )
}
