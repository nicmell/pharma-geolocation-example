import React, {useEffect} from "react";
import {PropsWithChildren} from "react";

import {RefreshOutlined} from "@mui/icons-material";
import {AppBar, CircularProgress, Container, IconButton} from "@mui/material";

import usePharmaData from "../../Hooks/usePharmaData";

export type LayoutProps = PropsWithChildren

export default function Layout({children}: LayoutProps) {
  const {fetchData, isLoading} = usePharmaData()
  useEffect(() => {fetchData()}, [fetchData])

  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <AppBar color='transparent' elevation={0} position='relative'>
        <div style={{display: 'flex'}}>
        <IconButton size='large'>
          <RefreshOutlined onClick={() => fetchData()}/>
        </IconButton>
        </div>
      </AppBar>
      <Container component='main' style={{flexGrow: 1}}>
        {
          isLoading ?
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
              <CircularProgress/>
            </div> :
          children
        }
      </Container>
    </div>
  )
}
