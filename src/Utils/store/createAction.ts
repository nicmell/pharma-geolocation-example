
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
  return (set: SetState<State>) => function(...args: Args) {
    set((state) => handler(...args)(state), false, name)
  }
}

function createActions<State, T extends Record<string, any>>(
  actionsMap: T
):
  (set: SetState<State>) => { [key in keyof T]: ReturnType<T[key]> } {
  return function (set) {
    const actions: any = {}
    Object.entries(actionsMap).forEach(([key, val]) => {
      actions[key] = val(set)
    })
    return actions
  }
}

export default createActions
