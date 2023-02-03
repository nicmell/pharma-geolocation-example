
function pipe(...fns: ((_ :any) => any)[]) {
  return (arg: any) => fns.reduce((acc, fn) => fn(acc), arg)
}
export default pipe
