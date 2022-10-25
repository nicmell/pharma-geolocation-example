import React from 'react';

import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

import MainRouter from "@/Routers/MainRouter/MainRouter";
import theme from "@/Theme/Theme";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <MainRouter/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
