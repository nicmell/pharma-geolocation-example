
function pipe<T> (...fns: ((_ : any) => T)[]) {
  return fns.reduce((acc, fn) => (_: any) => fn(acc))
}
export default pipe
