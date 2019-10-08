const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

/**
 * Generates an alphanumeric string with the given length.
 * @param length {Number} Length of the string. 10 by default.
 * @returns {string}
 */
export default (length = 10) => {
    let str = ""
    for (var i = 0; i < length; i++ ) {
        str += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return str
}