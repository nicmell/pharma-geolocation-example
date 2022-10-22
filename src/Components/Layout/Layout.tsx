import React, {PropsWithChildren, useEffect} from "react";

import {CircularProgress, Container} from "@mui/material";

import NavBar from "@/Components/Layout/NavBar/NavBar";
import usePharmaData from "@/Hooks/usePharmaData";

export type LayoutProps = PropsWithChildren

export default function Layout({children}: LayoutProps) {
  const {fetchData, isLoading} = usePharmaData()
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <NavBar/>
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
