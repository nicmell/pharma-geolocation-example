
import pharmaClient from "@/Services/pharmaClient";
import createPharmaActions from "@/Store/actions/createPharmaActions";
import {PharmaState, StoreSlice} from "@/Typings/store";



const defaultState = {
  data: undefined,
  isLoading: true,
  error: undefined,
}


async function fetchData(
  {setLoading, setData, setError}: ReturnType<typeof createPharmaActions>
) {
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

const createPharmaSlice :StoreSlice<PharmaState> = (set) => {
  const actions = createPharmaActions(set)
  return {
    pharma: {
      ...defaultState,
      fetchData: async () => await fetchData(actions)
    }
  }
}

export default createPharmaSlice
