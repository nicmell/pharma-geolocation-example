import {Loader} from "@googlemaps/js-api-loader";

import {DistanceMatrixResponse, LatLngLiteral, TravelMode} from "@/Typings/google-maps";


let distanceMatrixService: google.maps.DistanceMatrixService;
let geocoderService: google.maps.Geocoder;

(async function loadGoogleApiService() {
  const googleApiLoader = new Loader({
    libraries: ["places"],
    apiKey: `${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
  });
  const googleApi = await googleApiLoader.load()
  distanceMatrixService = new googleApi.maps.DistanceMatrixService()
  geocoderService = new googleApi.maps.Geocoder()
})()

const googleMapsClient = {
  geocode: async function(geocodeInfo: LatLngLiteral | string) {
    return await geocoderService.geocode(
      typeof geocodeInfo === 'string' ? {address: geocodeInfo} : {location: geocodeInfo}
    )
  },
  getDistanceMatrix: async function(origin: LatLngLiteral, destinations: LatLngLiteral[], travelMode: TravelMode) {
    return await distanceMatrixService.getDistanceMatrix({
      origins: [origin], destinations, travelMode: travelMode as google.maps.TravelMode
    }) as DistanceMatrixResponse
  }
}

export default googleMapsClient
