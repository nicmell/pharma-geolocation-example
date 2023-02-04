import {PharmaData} from "@/Typings/pharma";
import {PharmaState} from "@/Typings/store";
import createActions from "@/Utils/store/createAction";

const setLoading = (state: PharmaState) =>  (loading: boolean) => {
  state.pharma.isLoading = loading
}

const setError = (state: PharmaState) => (error: Error) => {
  state.pharma.error = error
}

export const setData = (state: PharmaState) => (data: PharmaData[]) => {
  state.pharma.data = data
}

export default createActions({
  setLoading,
  setError,
  setData
})

