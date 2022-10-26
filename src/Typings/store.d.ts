
import {StateCreator} from "zustand";

import {ComputeMinimumDistanceResult} from "@/Hooks/useComputeMinimumDistance";
import {TravelMode} from "@/Typings/google-maps";
import {LatLng} from "@/Typings/google-maps"
import {PharmaData} from "@/Typings/pharma";



export type StoreState =
  PharmaState &
  AppSettingsState &
  FormState


export type StoreSlice<T> = StateCreator<
  StoreState,
  [],
  [["zustand/devtools", never], ["zustand/immer", never]],
  T
  >

export interface PharmaState {
  pharma: {
    data?: PharmaData[]
    error?: Error
    isLoading: boolean
    fetchData: () => Promise<void>
  }
}

export interface FormState {
  form: {
    input?: LatLng | string
    setInput: (input: LatLng | string | undefined) => void
    result?: ComputeMinimumDistanceResult
    setResult: (result: ComputeMinimumDistanceResult) => void
  }
}

export interface AppSettingsState {
  appSettings: {
    travelMode: TravelMode
    useCoordinates: boolean
    switchTravelMode: (travelMode: TravelMode) => void
    toggleUseCoordinates: () => void
  }
}

