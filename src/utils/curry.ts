export default <T>(func: Function) => {
  return function curried(this: any, ...args: Array<T>) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return (...args2: Array<T>) => {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
