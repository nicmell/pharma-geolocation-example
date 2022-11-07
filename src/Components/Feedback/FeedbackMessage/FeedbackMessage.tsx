
import React from 'react'
import {PropsWithChildren} from "react";

import {Alert, AlertProps, AlertTitle} from "@mui/material";


export type MessageProps = PropsWithChildren<{
  title?: string
  severity: AlertProps['severity']
}>

export default function FeedbackMessage({title, severity, children}: MessageProps) {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Alert data-testid={`${severity}-message`} severity={severity} style={{maxWidth: '100%'}}>
        { title && <AlertTitle>{title}</AlertTitle> }
        { children && <p>{children}</p> }
      </Alert>
    </div>
  )
}
