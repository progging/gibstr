const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

/**
 * Generates an alphanumeric string with the given length.
 * @param length Length of the string. 10 by default.
 */
export default (length: number = 10): string => {
  let str = ''
  for (var i = 0; i < length; i++) {
    str += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return str
}
