const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

/**
 * Generates an alphanumeric string with the given length.
 * @param [length=10] Length of the string. 10 by default.
 */
export const gibstr = (length = 10) => {
  let str = ''
  for (let i = 0; i < length; i++)
    str += characters.charAt(Math.floor(Math.random() * characters.length))
  return str
}
