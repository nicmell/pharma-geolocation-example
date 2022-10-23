
import useStore from "@/Hooks/useStore";
import {PharmaDataResponse} from "@/Typings/pharma";

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
  return {data, error, isLoading, fetchData} as FetchDataResponse
}
