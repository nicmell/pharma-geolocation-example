import React, {useEffect, useState} from 'react';

import {CssBaseline, ThemeProvider} from "@mui/material";
import {DataGrid, GridColDef} from '@mui/x-data-grid';

import Layout from "../Components/Layout/Layout";
import PharmaClient, {PharmaDataResponse} from "../Services/pharmaClient";
import theme from "../Theme/Theme";

const columns : GridColDef[] = [
  {"field": "CODICE_ASL"},
  {"field": "DENOM_ASL"},
  {"field": "CODICE_NAZIONALE"},
  {"field": "CODICE_REGIONALE"},
  {"field": "DENOM_FARMACIA"},
  {"field": "INDIRIZZO"},
  {"field": "LOCALITA"},
  {"field": "TELEFONO"},
  {"field": "FAX"},
  {"field": "EMAIL"},
  {"field": "CARATTERIZZAZIONE"},
  {"field": "PRENOTAZIONI_CONSENSO"},
  {"field": "ESENZIONI"},
  {"field": "MUNICIPIO"},
  {"field": "ID_NIL"},
  {"field": "NIL"},
  {"field": "LNG"},
  {"field": "LAT"},
  {"field": "LOCATION"}
]

function App() {

  const [data, setData] = useState<PharmaDataResponse>([])
  useEffect(() => {
    PharmaClient.fetchData().then(({data}) => setData(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
        <div style={{height: '100%', padding: '32px 0'}}>
          <DataGrid columns={columns} rows={data.map((row, id) => ({id, ...row}))}/>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
