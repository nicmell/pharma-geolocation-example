import {ComputeMinimumDistanceResult} from "@/Hooks/useComputeMinimumDistance";
import {TravelMode} from "@/Typings/google-maps";
import {LatLng} from "@/Typings/google-maps"
import {PharmaData} from "@/Typings/pharma";


export type StoreState = {
  form: {
    input?: LatLng | string
    setInput: (input: LatLng | string | undefined) => void
    result?: ComputeMinimumDistanceResult
    setResult: (result: ComputeMinimumDistanceResult) => void
  }
  appSettings: {
    travelMode: TravelMode
    useCoordinates: boolean
    switchTravelMode: (travelMode: TravelMode) => void
    toggleUseCoordinates: () => void
  }
  data?: PharmaData[]
  error?: Error
  isLoading: boolean
  fetchData: () => Promise<void>
}
