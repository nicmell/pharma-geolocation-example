import React, {useState} from "react";

import {Alert, AlertTitle, Grid} from "@mui/material";

import {GoogleAutocompleteForm} from "@/Components/Forms/GoogleAutocompleteForm/GoogleAutocompleteForm";
import {ToggleSearchMode} from "@/Components/Widgets/ToggleSearchMode/ToggleSearchMode";
import TravelModeSwitch from "@/Components/Widgets/TravelModeSwitch/TravelModeSwitch";
import useComputeMinimumDistance, {ComputeMinimumDistanceResult} from "@/Hooks/useComputeMinimumDistance";
import {LatLngLiteral} from "@/Typings/google-maps";


export default function HomePage() {
  const [result, setResult] = useState<ComputeMinimumDistanceResult>()
  const computeMinimumDisance = useComputeMinimumDistance()
  const handleSubmit = async (latLng: LatLngLiteral) => {
    const res = await computeMinimumDisance(latLng, 'DRIVING')
    setResult(res)
  }
  const renderResult = () => {
    if (result) {
      const [pharmaData, distanceInfo] = result
      return (
        <Alert severity='success'>
          <AlertTitle>{pharmaData.DENOM_FARMACIA}</AlertTitle>
          <div>
            {`Distanza: ${distanceInfo.distance.text}`}
          </div>
          <div>
            {`Durata: ${distanceInfo.duration.text}`}
          </div>
        </Alert>
      )
    }
  }
  return (
    <div style={{height: '100%'}}>
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <Grid flexGrow={1} item>
            <ToggleSearchMode/>
          </Grid>
          <Grid>
            <TravelModeSwitch/>
          </Grid>
        </Grid>
        <Grid alignItems='center' container item justifyContent='center'>
          <Grid item md={6} xs={12}>
            <GoogleAutocompleteForm onSubmit={handleSubmit}/>
          </Grid>
        </Grid>
        <Grid alignItems='center' container item justifyContent='center'>
          <Grid item md={6} xs={12}>
            {
              renderResult()
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
