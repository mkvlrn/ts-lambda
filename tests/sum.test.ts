import { sum } from '../src/sum'

describe('sum.js', () => {
  it('should export a function', () => {
    expect(typeof sum).toBe('function')
  })
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
