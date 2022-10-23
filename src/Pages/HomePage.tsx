import React, {useState} from "react";

import {Alert, AlertTitle, Grid} from "@mui/material";

import {GoogleAutocompleteForm} from "@/Components/Forms/GoogleAutocompleteForm/GoogleAutocompleteForm";
import {LatLngForm} from "@/Components/Forms/LatLngForm/LatLngForm";
import useAppSettings from "@/Hooks/useAppSettings";
import useComputeMinimumDistance, {ComputeMinimumDistanceResult} from "@/Hooks/useComputeMinimumDistance";
import {LatLngLiteral} from "@/Typings/google-maps";


export default function HomePage() {
  const computeMinimumDistance = useComputeMinimumDistance()
  const {travelMode, useCoordinates} = useAppSettings()

  const [error, setError] = useState<Error>()
  const [result, setResult] = useState<ComputeMinimumDistanceResult>()

  const handleSubmit = async (latLng: LatLngLiteral) => {
    setError(undefined)
    setResult(undefined)
    try {
      const res = await computeMinimumDistance(latLng, travelMode)
      setResult(res)
    } catch (err) {
      setError(err as Error)
    }
  }

  const renderResult = () => {
    if (error) {
      return (
        <Alert severity='success'>
        <AlertTitle>{'Errore!'}</AlertTitle>
          {error.message}
        </Alert>
      )
    } else if (result) {
      const [pharmaData, distanceInfo] = result
      return (
        <Alert severity='success'>
          <AlertTitle>{pharmaData.DENOM_FARMACIA}</AlertTitle>
            {`Distanza: ${distanceInfo.distance.text}`}
          <br/>
            {`Durata: ${distanceInfo.duration.text}`}
        </Alert>
      )
    }
  }
  return (
      <Grid alignItems='center' container justifyContent='center'>
        <Grid item md={6} xs={12}>
          {
            useCoordinates ?
              <LatLngForm onSubmit={handleSubmit}/> :
              <GoogleAutocompleteForm onSubmit={handleSubmit}/>
          }
          { renderResult() }
        </Grid>
      </Grid>
  )
}
