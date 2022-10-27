import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import pharmaClient from "@/Services/pharmaClient";
import {PharmaState, StoreSlice} from "@/Typings/store";


export default devtools(immer((set) => {
  return {
    pharma: {
      data: undefined,
      isLoading: true,
      error: undefined,
      fetchData: async function () {
        set((state) => {state.pharma.isLoading = true})
        try {
          const {data} = await pharmaClient.fetchData()
          set((state) => {state.pharma.data = data})
        } catch (error) {
          set((state) => {state.pharma.error = error as Error})
        } finally {
          set((state) => {state.pharma.isLoading = false})
        }
      }
    }
  }
})) as StoreSlice<PharmaState>
