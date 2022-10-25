import React  from 'react'

import {Alert, AlertTitle} from "@mui/material";

export type ErrorMessageProps = {error: Error}

export default function ErrorMessage({error}: ErrorMessageProps) {
  return (
    <Alert id='error-message' severity='error'>
      <AlertTitle>{'Si è veirficato un errore!'}</AlertTitle>
      {process.env.NODE_ENV === 'development' && error.message }
    </Alert>
  )
}
