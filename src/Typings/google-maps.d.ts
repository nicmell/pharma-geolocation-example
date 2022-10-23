import '@types/googlemaps';

declare global {
  interface Window {
    google: typeof google
  }
}

export type TravelMode = keyof typeof google.maps.TravelMode
export type DistanceMatrixResponse = google.maps.DistanceMatrixResponse
export type PlaceResult = google.maps.places.PlaceResult
export type LatLngLiteral = google.maps.LatLngLiteral
export type DistanceMatrixResponseElement = google.maps.DistanceMatrixResponseElement
