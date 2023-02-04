
import pharmaClient from "@/Services/pharmaClient";
import createPharmaActions from "@/Store/actions/createPharmaActions";
import {PharmaState, StoreSlice} from "@/Typings/store";


const createPharmaSlice :StoreSlice<PharmaState> = (set) => {
  const {setLoading, setError, setData} = createPharmaActions(set)
  return {
    pharma: {
      data: undefined,
      isLoading: true,
      error: undefined,
      fetchData: async function () {
        setLoading(true)
        try {
          const {data} = await pharmaClient.fetchData()
          setData(data)
        } catch (error: any) {
          setError(error)
        } finally {
          setLoading(false)
        }
      }
    }
  }
}

export default createPharmaSlice
