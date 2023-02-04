
export type SetState<State> =
  (nextState: (state: State) => void, replace: false, name: string) => void

export type Action<State, Args extends unknown[]> =
  (state: State) => (...args: Args) => void


function createAction<State, Args extends unknown[]>(
  set: SetState<State>,
  type: string,
  action: Action<State, Args>
) {
  return function(...args: Args) {
    set((state) => action(state)(...args), false, type)
  }
}

function createActions<State, T extends Record<string, any>>(
  actionsMap: T
):
  (set: SetState<State>) => { [key in keyof T]: ReturnType<T[key]> } {
  return function (set) {
    const actions: any = {}
    Object.entries(actionsMap).forEach(([key, val]) => {
      actions[key] = createAction(set, key, val)
    })
    return actions
  }
}

export default createActions
