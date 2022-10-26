import React  from 'react'

import {Alert, AlertTitle} from "@mui/material";

export type ErrorMessageProps = {error: Error}

export default function ErrorMessage({error}: ErrorMessageProps) {
  return (
    <Alert data-testid='error-message' severity='error'>
      <AlertTitle>{'Si è veirficato un errore!'}</AlertTitle>
      { error.message }
      <br/>
      {error.stack}
    </Alert>
  )
}
