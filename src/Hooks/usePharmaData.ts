
import {PharmaDataResponse} from "../Services/pharmaClient";
import useStore from "./useStore";

export type FetchDataResponse = (
  {
  isLoading: true
  error?: Error | undefined
  data?: PharmaDataResponse
}
  | {
  isLoading: false
  error: Error
  data?: undefined
}
  | {
  isLoading: false
  error?: undefined
  data: PharmaDataResponse
}) &
{
  fetchData: () => Promise<void>
};

export default function usePharmaData() : FetchDataResponse  {
  const {data, error, isLoading, fetchData} = useStore()
  return {data, error, isLoading, fetchData: () => fetchData()} as FetchDataResponse
}
