
function pipe<T = any>(...fns: ((..._: any) => any)[]) {
  return (value: any) => fns.reverse().reduce((acc, fn) => fn(acc), value) as T
}

export default pipe
