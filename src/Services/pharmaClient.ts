import axios from "axios";


export type PharmaData = {
  CODICE_ASL: number
  DENOM_ASL: string
  CODICE_NAZIONALE: number
  CODICE_REGIONALE: string
  DENOM_FARMACIA: string
  INDIRIZZO: string
  LOCALITA: string
  TELEFONO: string
  FAX: number
  EMAIL: string
  CARATTERIZZAZIONE: string
  PRENOTAZIONI_CONSENSO: string
  ESENZIONI: string
  MUNICIPIO: number
  ID_NIL: number
  NIL: string
  LNG: number
  LAT: number
  LOCATION: string
}

export type PharmaDataResponse = PharmaData[]

async function fetchData() {
  return  await axios.get<PharmaDataResponse>(
    'https://dati.comune.milano.it/dataset/7e18f0d3-b7f1-49b7-969d-da2c04131dd6/resource/1d71ca1e-a6b2-4984-8e35-a0bd9163bbca/download/ds501_elenco_farmacie_milano_final.json',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  )
}

export default {
  fetchData
}
