import {immer} from "zustand/middleware/immer";

import pharmaClient, {PharmaDataResponse} from "@/Services/pharmaClient";


export type StoreState = {
  data?: PharmaDataResponse
  error?: Error
  isLoading: boolean
  fetchData: () => Promise<void>
}


export default immer<StoreState>((set) => {
  return {
    data: undefined,
    isLoading: false,
    error: undefined,
    fetchData: async function () {
      set((state) => {state.isLoading = true})
      try {
        const {data} = await pharmaClient.fetchData()
        set((state) => {state.data = data})
      } catch (error) {
        set((state) => {state.error = error as Error})
      } finally {
        set((state) => {state.isLoading = false})
      }
    }
  }
})
