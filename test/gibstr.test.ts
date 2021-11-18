import { describe, expect } from '@jest/globals'
import { gibstr } from '../src'

describe('Gibstr', () => {
  it('should generate a string', function () {
    const randomString = gibstr()
    expect(typeof randomString).toBe('string')
  })

  it('should generate an alphanumeric string', function () {
    const randomString = gibstr()
    const alphanumericRegex = /^[a-zA-Z0-9]*$/
    expect(alphanumericRegex.test(randomString)).toBe(true)
  })

  it('should generate a string with a default length of 10', function () {
    const randomString = gibstr()
    expect(randomString).toHaveLength(10)
  })

  it('should generate a string with a length of 11', function () {
    const randomString = gibstr(11)
    expect(randomString).toHaveLength(11)
  })
})
