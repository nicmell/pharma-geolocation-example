import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import {TravelMode} from "@/Typings/google-maps";
import {AppSettingsState, StoreSlice} from "@/Typings/store";

const defaultState = {
  debug: false,
  travelMode: 'DRIVING' as TravelMode,
  useCoordinates: false
}


export default devtools(immer((set, get) => {
  return {
      appSettings: {
        ...defaultState,
        toggleDebug: function () {
          const {appSettings} = get()
          set((state) => {
            state.appSettings.debug = !appSettings.debug
          })
        },
        switchTravelMode: function switchTravelMode(travelMode: TravelMode) {
          set((state) => {state.appSettings.travelMode = travelMode})
        },
        toggleUseCoordinates: function () {
          const {appSettings} = get()
          set((state) => {
            state.appSettings.useCoordinates = !appSettings.useCoordinates
          })
        },
        reset: function () {
          set((state) => {state.appSettings = {...state.appSettings, ...defaultState}})
        }
      }
  }
})) as StoreSlice<AppSettingsState>

