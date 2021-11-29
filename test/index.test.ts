import { describe, expect } from '@jest/globals'
import { gibstr } from '../src'

describe('gibstr', () => {
  test('should generate a string', () => {
    const randomString = gibstr()
    expect(typeof randomString).toBe('string')
  })

  test('should generate an alphanumeric string', () => {
    const randomString = gibstr()
    const alphanumericRegex = /^[a-zA-Z0-9]*$/
    expect(alphanumericRegex.test(randomString)).toBe(true)
  })

  test('should generate a string with a default length of 10', () => {
    const randomString = gibstr()
    expect(randomString).toHaveLength(10)
  })

  test('should generate a string with a length of 11', () => {
    const randomString = gibstr(11)
    expect(randomString).toHaveLength(11)
  })
})
