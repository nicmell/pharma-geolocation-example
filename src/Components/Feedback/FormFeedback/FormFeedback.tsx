import React from "react";


import ErrorMessage from "@/Components/Feedback/ErrorMessage/ErrorMessage";
import FeedbackMessage from "@/Components/Feedback/FeedbackMessage/FeedbackMessage";
import useForm from "@/Hooks/useForm";


export default function FormFeedback() {
  const {result, error} = useForm()
  if (error) {
    return (
      <ErrorMessage error={error}/>
    )
  } else if (result) {
    if (!result.length) {
      return (
        <FeedbackMessage severity='warning' title='Nessun risultato trovato'/>
      )
    }
    const [pharmaData, distanceInfo] = result
    return (
      <FeedbackMessage severity='success' title={pharmaData.DENOM_FARMACIA}>
        {`Distanza: ${distanceInfo.distance.text}`}
        <br/>
        {`Durata: ${distanceInfo.duration.text}`}
      </FeedbackMessage>
    )
  }
  return null
}
