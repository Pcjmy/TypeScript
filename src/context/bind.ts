// @ts-ignore
Function.prototype.MyBind = function(context: any, ...bindArgs: any[]) {
  const self = this

  return function(...args: any[]) {
    const newArgs = bindArgs.concat(args)
    return self.apply(context, newArgs)
  }
}