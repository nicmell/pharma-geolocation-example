
import pharmaClient from "@/Services/pharmaClient";
import {PharmaData} from "@/Typings/pharma";
import {PharmaState, StoreSlice} from "@/Typings/store";


/*
function createAction<State, Args extends unknown[]>(
  set: (nextState: (state: State) => void, replace: false, name: string) => void,
  name: string,
  fn: (state: State, ...args: Args) => void
) {
  return function(...args: Args) {
    set((state) => fn(state, ...args), false, name)
  }
}


type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : never;

function createActions
<State, Args extends unknown[], T extends Record<string, (state: State, ...args: Args) => void>>
(
  set: (nextState: (state: State) => void, replace: false, name: string) => void,
  actionsMap: Record<string, (state: State, ...args: any[]) => void>
)
  : {[key in keyof T]: OmitFirstArg<T[key]>} {
    const actions: any = {}
    Object.entries(actionsMap).forEach(([key, val]) => {
      actions[key] = createAction(set, key, val)
    })
    return actions
}
*/


export type Action<State, Args extends unknown[]> =
  (state: State) => (...args: Args) => void

function createAction<State, Args extends unknown[]>(
  set: (nextState: (state: State) => void, replace: false, name: string) => void,
  type: string,
  action: Action<State, Args>
) {
  return function(...args: Args) {
    set((state) => action(state)(...args), false, type)
  }
}

function createActions<State>(
  set: (nextState: (state: State) => void, replace: false, name: string) => void,
) {
  return function <T extends Record<string, any>>(actionsMap: T): { [key in keyof T]: ReturnType<T[key]> } {
    const actions: any = {}
    Object.entries(actionsMap).forEach(([key, val]) => {
      actions[key] = createAction(set, key, val)
    })
    return actions
  }
}

const setLoading = (state: PharmaState) =>  (loading: boolean) => {
  state.pharma.isLoading = loading
}

const setError = (state: PharmaState) => (error: Error) => {
  state.pharma.error = error
}

export const setData = (state: PharmaState) => (data: PharmaData[]) => {
  state.pharma.data = data
}

const actionsMap = {
  setLoading,
  setError,
  setData
}

export type PharmaSlice = StoreSlice<PharmaState>

const createPharmaSlice :PharmaSlice = (set, get) => {
  /*
  const {setIsLoading, setError} = createActions(set, {
    setIsLoading: (state, loading: boolean) => {
      state.pharma.isLoading = loading
    },
    setError: (state, error: Error) => {
    state.pharma.error = error
  }
  })
  setIsLoading(true)

  const setLoading = createAction( set,  'setIsLoading', (state, loading: boolean) => {
    state.pharma.isLoading = loading
  })
  const setxError = createAction(set, 'setError', (state, error: Error) => {
    state.pharma.error = error
  })
  const setData = createAction(set, 'setData', (state, data: PharmaData[]) => {
    state.pharma.data = data
  })
   */
  const {setLoading, setError, setData} = createActions(set)(actionsMap)
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
