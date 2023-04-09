import './call'

describe('自定义 call', () => {
  it('绑定 this - 对象', () => {
    function fn(this: any) {
      return this
    }
    // @ts-ignore
    const res = fn.MyCall({x: 100})
    expect(res).toEqual({x: 100})
  })
  it('绑定 this - 值类型', () => {
    function fn(this: any) {
      return this
    }
    // @ts-ignore
    const res = fn.MyCall('abc')
    expect(res.toString()).toBe('abc')
  })
})