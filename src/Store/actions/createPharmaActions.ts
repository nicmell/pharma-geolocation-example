import {PharmaData} from "@/Typings/pharma";
import {PharmaState} from "@/Typings/store";

const setLoading = (state: PharmaState) =>  (loading: boolean) => {
  state.pharma.isLoading = loading
}

const setError = (state: PharmaState) => (error: Error) => {
  state.pharma.error = error
}

export const setData = (state: PharmaState) => (data: PharmaData[]) => {
  state.pharma.data = data
}

const actionsMap = {
  setLoading,
  setError,
  setData
}

export default actionsMap

