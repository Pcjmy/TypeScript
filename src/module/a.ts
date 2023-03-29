let a: any = 666;
let randomValue: unknown = true;

if (typeof randomValue === 'function') {
  randomValue()
}

if (typeof randomValue === 'string') {
  randomValue.toUpperCase()
}