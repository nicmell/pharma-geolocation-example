import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import {FormState, StoreSlice} from "@/Typings/store";


export default devtools(immer((set, get) => {
  return {
      form: {
        input: undefined,
        result: undefined,
        error: undefined,
        setInput: function (input) {
          return set((state) => {state.form.input = input})
        },
        setResult: function (result) {
          return set((state) => {state.form.result = result})
        },
        setError: function (error) {
          return set((state) => {state.form.error = error})
        }
      }
  }
})) as StoreSlice<FormState>

