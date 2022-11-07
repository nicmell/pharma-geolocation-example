import React, {PropsWithChildren} from "react";

import {Container} from "@mui/material";
import {useMeasure} from "react-use";

import Loader from "@/Components/Feedback/Loader/Loader";
import NavBar from "@/Components/Layout/NavBar/NavBar";
import ErrorBoundary from "@/Components/Misc/ErrorBoundary/ErrorBoundary";
import usePharmaData from "@/Hooks/usePharmaData";

export type LayoutProps = PropsWithChildren

export default function MainLayout({children}: LayoutProps) {
  const {isLoading, error} = usePharmaData()
  const [ref, {height}] = useMeasure<HTMLDivElement>();
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <NavBar/>
        <Container component='main' ref={ref} style={{flex: 1, paddingTop: '16px', paddingBottom: '64px'}}>
          <div style={{height: `${height}px`}}>
            {
              isLoading ?
                <Loader/> :
                <ErrorBoundary error={error}>
                  {children}
                </ErrorBoundary>
            }
          </div>
        </Container>
    </div>
  )
}
