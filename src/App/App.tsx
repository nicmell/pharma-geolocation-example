import React from 'react';

import {CssBaseline, ThemeProvider} from "@mui/material";

import Layout from "../Components/Layout/Layout";
import GridPage from "../Pages/GridPage";
import theme from "../Theme/Theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
        <GridPage/>
      </Layout>
    </ThemeProvider>
  )
}

export default App
