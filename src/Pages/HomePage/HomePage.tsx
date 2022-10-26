import React from "react";

import {Alert, AlertTitle, Grid} from "@mui/material";

import ErrorMessage from "@/Components/Feedback/ErrorMessage/ErrorMessage";
import GeolocationForm from "@/Components/Forms/GeolocationForm/GeolocationForm";
import useForm from "@/Hooks/useForm";

function FormFeedback() {
  const {result, error} = useForm()
  if (error) {
    return (
      <ErrorMessage error={error}/>
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
  return null
}

export default function HomePage() {
  return (
      <Grid alignItems='center' container justifyContent='center'>
        <Grid item md={6} xs={12}>
          <GeolocationForm/>
          <div style={{margin: '32px 0'}}>
            <FormFeedback/>
          </div>
        </Grid>
      </Grid>
  )
}
