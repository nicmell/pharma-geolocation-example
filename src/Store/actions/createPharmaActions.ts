import {PharmaData} from "@/Typings/pharma";
import {PharmaState} from "@/Typings/store";
import createActions, {createAction} from "@/Utils/store/createActions";


export default createActions(
  'pharma',
  {
  setLoading:  createAction(
    'setLoading',
    function (loading: boolean) {
      return (state: PharmaState) => {
        state.pharma.isLoading = loading
      }
    }),
  setError: createAction(
    'setError',
    function (error: Error) {
      return (state: PharmaState) => {
        state.pharma.error = error
      }
    }),
  setData: createAction(
    'setData',
    function (data: PharmaData[]) {
      return (state: PharmaState) => {
        state.pharma.data = data
      }
    })
})

