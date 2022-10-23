import usePharmaData from "@/Hooks/usePharmaData";
import googleMapsClient from "@/Services/googleMapsClient";
import {DistanceMatrixResponseElement, LatLngLiteral, TravelMode} from "@/Typings/google-maps";
import {PharmaData} from "@/Typings/pharma";

export type ComputeMinimumDistanceResult = [PharmaData, DistanceMatrixResponseElement]

function getEuclideanDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x1 - x2, y1 - y2)
}

function sortByEuclideanDistance({lat, lng}: LatLngLiteral, data: PharmaData[]) {
  return [...data]
    .sort(
      (
        {LAT: LAT1, LNG: LNG1},
        {LAT: LAT2, LNG: LNG2}
      ) => (
        getEuclideanDistance(lat, lng, LAT1, LNG1) - getEuclideanDistance(lat, lng, LAT2, LNG2)
      )
    )
}


export default function useComputeMinimumDistance():
  (origin: LatLngLiteral, travelMode: TravelMode) => Promise<ComputeMinimumDistanceResult> {
  const {data = []} = usePharmaData()
  return async (origin: LatLngLiteral, travelMode: TravelMode) => {
    const pharmaData = sortByEuclideanDistance(origin, data).slice(0, 25)
    const resp = await googleMapsClient
      .getDinstanceMatrix(origin, pharmaData.map(({LAT, LNG}) => ({lat: LAT, lng: LNG})), travelMode)
    const elements = resp.rows[0].elements
    const aggregatedData = elements.map((elt, i) => [pharmaData[i], elt])
    return aggregatedData[0] as [PharmaData, DistanceMatrixResponseElement]
  }
}
