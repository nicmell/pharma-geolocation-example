import {Loader} from "@googlemaps/js-api-loader";

import {DistanceMatrixRequest, DistanceMatrixResponse} from "@/Typings/google-maps";

export let distanceMatrixService: google.maps.DistanceMatrixService;

(async function loadGoogleApiService() {
  const googleApiLoader = new Loader({
    libraries: ["places"],
    apiKey: `${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
  });
  const googleApi = await googleApiLoader.load()
  distanceMatrixService = new googleApi.maps.DistanceMatrixService()
})()

const googlePlacesClient = {
  getDinstanceMatrix: async function(request: DistanceMatrixRequest) {
    return await distanceMatrixService.getDistanceMatrix(request) as DistanceMatrixResponse
  }
}

export default googlePlacesClient
