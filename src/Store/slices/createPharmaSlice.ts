
import pharmaClient from "@/Services/pharmaClient";
import createPharmaActions from "@/Store/actions/createPharmaActions";
import {PharmaState, StoreSlice} from "@/Typings/store";
import createActions from "@/Utils/store/createAction";


const createPharmaSlice :StoreSlice<PharmaState> = (set) => {
  const {setLoading, setError, setData} = createActions(set)(createPharmaActions)
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
