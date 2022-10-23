import '@types/googlemaps';

declare global {
  interface Window {
    google: typeof google
  }
}

export type TravelMode = keyof typeof google.maps.TravelMode
export type DistanceMatrixRequest = google.maps.DistanceMatrixRequest
export type DistanceMatrixResponse = google.maps.DistanceMatrixResponse
export type PlaceResult = google.maps.places.PlaceResult
