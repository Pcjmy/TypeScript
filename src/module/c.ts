let message: any
message = 'abc'
let d = (<string>message).endsWith('c')
let e = (message as string).endsWith('c')
