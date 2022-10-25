import {immer} from "zustand/middleware/immer";

import pharmaClient from "@/Services/pharmaClient";
import {TravelMode} from "@/Typings/google-maps";
import {StoreState} from "@/Typings/store";


export default immer<StoreState>((set,  get) => {
  return {
    form: {
      input: undefined,
      setInput(input) {
        set((state) => {state.form.input = input})
      },
      result: undefined,
      setResult(result) {
        set((state) => {state.form.input = result})
      }
    },
    appSettings: {
      travelMode: 'DRIVING',
      useCoordinates: false,
      switchTravelMode: function (travelMode: TravelMode) {
        set((state) => {state.appSettings.travelMode = travelMode})
      },
      toggleUseCoordinates: function () {
        const {appSettings} = get()
        set((state) => {state.appSettings.useCoordinates = !appSettings.useCoordinates})
      }
    },
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
    },
  }
})
