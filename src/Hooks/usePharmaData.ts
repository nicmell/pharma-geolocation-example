
import useStore from "@/Hooks/useStore";
import {PharmaData} from "@/Typings/pharma";

export type FetchDataResponse = (
  {
  isLoading: true
  error?: Error | undefined
  data?: PharmaData[]
}
  | {
  isLoading: false
  error: Error
  data?: undefined
}
  | {
  isLoading: false
  error?: undefined
  data: PharmaData[]
}) &
{
  fetchData: () => Promise<void>
};

export default function usePharmaData() : FetchDataResponse  {
  const {data, error, isLoading, fetchData} = useStore()
  return {data, error, isLoading, fetchData} as FetchDataResponse
}
