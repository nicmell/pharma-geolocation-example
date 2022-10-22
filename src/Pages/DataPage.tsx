import React from "react";

import {DataGrid, GridColDef} from "@mui/x-data-grid";

import usePharmaData from "@/Hooks/usePharmaData";
import {PharmaData} from "@/Services/pharmaClient";

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


export default function DataPage() {
  const {data = [], error} = usePharmaData()
  return (
    <div style={{height: '100%', padding: '32px 0'}}>
      {
        error ?
          <span>{error.message}</span>  :
          <DataGrid
            columns={columns}
            getRowId={({CODICE_NAZIONALE}: PharmaData) => CODICE_NAZIONALE}
            rows={data}
          />

      }
    </div>
  )
}
