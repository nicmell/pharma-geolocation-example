import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import {FormState, StoreSlice} from "@/Typings/store";

const defaultState = {
  input: undefined,
  result: undefined,
  error: undefined
}


export default devtools(immer((set, get) => {
  return {
      form: {
        ...defaultState,
        setInput: function (input) {
          set((state) => {
            state.form.input = input
            state.form.result = undefined
            state.form.error = undefined
          })
        },
        setResult: function (result) {
          set((state) => {
            state.form.error = undefined
            state.form.result = result
          })
        },
        setError: function (error) {
          set((state) => {
            state.form.result = undefined
            state.form.error = error
          })
        },
        reset: function () {
          set((state) => {state.form = {...state.form, ...defaultState}})
        }
      }
  }
})) as StoreSlice<FormState>

