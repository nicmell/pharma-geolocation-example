
export type SetState<State> =
  (nextState: (state: State) => void, replace: false, name: string) => void

export type Action<State, Args extends unknown[]> = {
  name: string
  handler: (...args: Args) => (state: State) => void
}


export function createAction<State, Args extends unknown[]>(
  name: string,
  handler: (...args: Args) => (state: State) => void
) {
  return (slice: string, set: SetState<State>) => function(...args: Args) {
    set((state) => handler(...args)(state), false, `${slice}/${name}`)
  }
}

function createActions<State, T extends Record<string, any>>(
  slice: string,
  actionsMap: T
):
  (set: SetState<State>) => { [key in keyof T]: ReturnType<T[key]> } {
  return (set) => {
    const actions: any = {}
    Object.entries(actionsMap).forEach(([key, val]) => {
      actions[key] = val(slice, set)
    })
    return actions
  }
}

export default createActions
