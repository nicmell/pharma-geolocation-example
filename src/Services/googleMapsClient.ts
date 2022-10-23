import {Loader} from "@googlemaps/js-api-loader";

import {DistanceMatrixResponse, LatLngLiteral, TravelMode} from "@/Typings/google-maps";

export let distanceMatrixService: google.maps.DistanceMatrixService;

(async function loadGoogleApiService() {
  const googleApiLoader = new Loader({
    libraries: ["places"],
    apiKey: `${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
  });
  const googleApi = await googleApiLoader.load()
  distanceMatrixService = new googleApi.maps.DistanceMatrixService()
})()

const googleMapsClient = {
  getDinstanceMatrix: async function(origin: LatLngLiteral, destinations: LatLngLiteral[], travelMode: TravelMode) {
    return await distanceMatrixService.getDistanceMatrix({
      origins: [origin], destinations, travelMode: travelMode as google.maps.TravelMode
    }) as DistanceMatrixResponse
  }
}

export default googleMapsClient
