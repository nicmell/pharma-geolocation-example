import React from "react";

import {DataGrid, GridColDef} from "@mui/x-data-grid";

import usePharmaData from "@/Hooks/usePharmaData";
import {PharmaData} from "@/Typings/pharma";

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
  const {data = []} = usePharmaData()
  return (
    <DataGrid
      columns={columns}
      getRowId={({CODICE_NAZIONALE}: PharmaData) => CODICE_NAZIONALE}
      rows={data}
      style={{height: '100%'}}
    />
  )
}
