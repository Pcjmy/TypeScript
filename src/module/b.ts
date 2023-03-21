function print(): void {
  console.log('Hello World!')
}

function printResult(): undefined {
  console.log('Hello World!')
  return
}

function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode
  }
}

throwError('not found', 404)