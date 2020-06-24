import gibstr from '../src/gibstr'
import { expect } from 'chai'

describe('Gibstr', () => {
  it('should generate a string', function () {
    const randomString = gibstr()
    expect(randomString).to.be.a('string')
  })

  it('should generate a string with a default length of 10', function () {
    const randomString = gibstr()
    expect(randomString).to.have.lengthOf(10)
  })

  it('should generate a string with a length of 11', function () {
    const randomString = gibstr(11)
    expect(randomString).to.have.lengthOf(11)
  })
})
