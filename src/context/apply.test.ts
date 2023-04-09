import './apply'

describe('自定义 apply', () => {
  it('绑定 this - 对象', () => {
    function fn(this: any) {
      return this
    }
    // @ts-ignore
    const res = fn.MyApply({x: 100})
    expect(res).toEqual({x: 100})
  })
  it('绑定 this - 值类型', () => {
    function fn(this: any) {
      return this
    }
    // @ts-ignore
    const res1 = fn.MyApply('abc')
    expect(res1.toString()).toBe('abc')

    // @ts-ignore
    const res2 = fn.MyApply(null)
    expect(res2).not.toBeNull()
  })
  it('绑定参数', () => {
    function fn(a: number, b: number, c: number) {
      return a + b
    }
    // @ts-ignore
    const res = fn.MyApply(null, [10, 20])
    expect(res).toBe(30)
  })
})