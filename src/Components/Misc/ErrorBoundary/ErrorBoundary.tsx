import React, {PropsWithChildren, useCallback} from 'react'

import {Grid} from "@mui/material";
import useErrorBoundary from "use-error-boundary";

import ErrorMessage, {ErrorMessageProps} from "@/Components/Feedback/ErrorMessage/ErrorMessage";


export type ErrorBoundaryProps = PropsWithChildren<{error?: Error}>

const renderError = ({error}: ErrorMessageProps) => {
  return (
    <Grid
      alignItems='center'
      container
      justifyContent='center'
      style={{height: '100%'}}
    >
      <Grid item md={6} style={{marginBottom: '120px'}} xs={12}>
        <ErrorMessage error={error}/>
      </Grid>
    </Grid>
  )
}

export default function ErrorBoundary({children, error}: ErrorBoundaryProps) {
  const {ErrorBoundary: ErrorBoundaryComponent} = useErrorBoundary()
  const render = useCallback(() => children, [children])
  return (
    error ?
      renderError({error}) :
      <ErrorBoundaryComponent
        render={render}
        renderError={renderError}
      />
  )
}
