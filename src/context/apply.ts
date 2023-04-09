// @ts-ignore
Function.prototype.MyApply = function (context: any, args: any[] = []) {
  if (context == null) context = globalThis
  if (typeof context !== 'object') context = new Object(context)
  const key = Symbol()
  context[key] = this
  const res = context[key](...args)
  delete context[key]
  return res
}