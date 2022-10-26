import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import {TravelMode} from "@/Typings/google-maps";
import {AppSettingsState, StoreSlice} from "@/Typings/store";


export default devtools(immer((set, get) => {
  return {
      appSettings: {
        debug: false,
        toggleDebug: function () {
          const {appSettings} = get()
          set((state) => {
            state.appSettings.debug = !appSettings.debug
          })
        },
        travelMode: 'DRIVING',
        useCoordinates: false,
        switchTravelMode: function switchTravelMode(travelMode: TravelMode) {
          set((state) => {state.appSettings.travelMode = travelMode})
        },
        toggleUseCoordinates: function () {
          const {appSettings} = get()
          set((state) => {
            state.appSettings.useCoordinates = !appSettings.useCoordinates
          })
        }
      }
  }
})) as StoreSlice<AppSettingsState>

