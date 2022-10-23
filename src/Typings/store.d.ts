import {TravelMode} from "@/Typings/google-maps";
import {PharmaDataResponse} from "@/Typings/pharma";

export type StoreState = {
  appSettings: {
    travelMode: TravelMode
    useCoordinates: boolean
    switchTravelMode: (travelMode: TravelMode) => void
    toggleUseCoordinates: () => void
  }
  data?: PharmaDataResponse
  error?: Error
  isLoading: boolean
  fetchData: () => Promise<void>
}
