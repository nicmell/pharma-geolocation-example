import React, {PropsWithChildren} from 'react'

import {Grid} from "@mui/material";
import useErrorBoundary from "use-error-boundary";

import ErrorMessage, {ErrorMessageProps} from "@/Components/Feedback/ErrorMessage/ErrorMessage";


export type ErrorBoundaryProps = PropsWithChildren<{error?: Error}>

export default function ErrorBoundary({children, error}: ErrorBoundaryProps) {
  const {ErrorBoundary: ErrorBoundaryComponent} = useErrorBoundary()
  const render = () => children
  const renderError = ({error}: ErrorMessageProps) => {
    return (
      <Grid
        alignItems='center'
        container
        justifyContent='center'
        style={{height: '100%', paddingBottom: '50vh'}}
      >
        <Grid item md={6} xs={12}>
          <ErrorMessage error={error}/>
        </Grid>
      </Grid>
    )
  }
  return (
    error ?
      renderError({error}) :
      <ErrorBoundaryComponent
        render={render}
        renderError={renderError}
      />
  )
}
