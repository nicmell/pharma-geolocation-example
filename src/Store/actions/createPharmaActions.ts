import {PharmaData} from "@/Typings/pharma";
import {PharmaState} from "@/Typings/store";
import createActions, {createAction} from "@/Utils/store/createAction";

const setLoading = createAction(
  'setLoading',
  function (loading: boolean) {
    return (state: PharmaState) => {
      state.pharma.isLoading = loading
    }
})

const setError = createAction(
  'setError',
  function (error: Error) {
    return (state: PharmaState) => {
      state.pharma.error = error
    }
})

const setData =  createAction(
  'setData',
  function (data: PharmaData[]) {
  return (state: PharmaState) => {
    state.pharma.data = data
  }
})

export default createActions({
  setLoading,
  setError,
  setData
})

