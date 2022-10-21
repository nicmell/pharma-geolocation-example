import React from "react";
import {PropsWithChildren} from "react";

import {Container} from "@mui/material";

export type LayoutProps = PropsWithChildren

export default function Layout({children}: LayoutProps) {
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <Container component='main' style={{flexGrow: 1}}>
        {children}
      </Container>
    </div>
  )
}
