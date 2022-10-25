import React, {PropsWithChildren, useEffect} from "react";

import {Container} from "@mui/material";

import Loader from "@/Components/Feedback/Loader/Loader";
import NavBar from "@/Components/Layout/NavBar/NavBar";
import ErrorBoundary from "@/Components/Misc/ErrorBoundary/ErrorBoundary";
import usePharmaData from "@/Hooks/usePharmaData";

export type LayoutProps = PropsWithChildren

export default function MainLayout({children}: LayoutProps) {
  const {fetchData, isLoading, error} = usePharmaData()
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <NavBar/>
      <Container component='main' style={{flex: 1, paddingBottom: '48px'}}>
          {
            isLoading ?
              <Loader/> :
              <ErrorBoundary error={error}>
                {children}
              </ErrorBoundary>
          }
      </Container>
    </div>
  )
}
