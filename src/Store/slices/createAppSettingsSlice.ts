
import {TravelMode} from "@/Typings/google-maps";
import {AppSettingsState, StoreSlice} from "@/Typings/store";

const defaultState = {
  debug: false,
  travelMode: 'DRIVING' as TravelMode,
  useCoordinates: false
}


const createAppSettingsSlice: StoreSlice<AppSettingsState> = (set, get) => {
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
}

export default createAppSettingsSlice

