import React from "react";

import {Alert, AlertTitle} from "@mui/material";

import ErrorMessage from "@/Components/Feedback/ErrorMessage/ErrorMessage";
import useForm from "@/Hooks/useForm";


export default function FormFeedback() {
  const {result, error} = useForm()
  if (error) {
    return (
      <ErrorMessage error={error}/>
    )
  } else if (result) {
    if (result.length) {
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
    return (
      <Alert severity='warning'>
        <AlertTitle>{'Nessun risultato trovato'}</AlertTitle>
      </Alert>
    )
  }
  return null
}
