
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

export default createActions
