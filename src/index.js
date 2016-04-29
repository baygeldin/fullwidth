import charCodes from './fullwidth'

const codesMap = Object
  .keys(charCodes)
  .reduce((map, key) => {
    map[key.charCodeAt()] = charCodes[key].charCodeAt()
    return map
  }, {})

export default (str) => {
  let res = ''

  for (let ch of str) {
    let code = codesMap[ch.charCodeAt()]
    res += code ? String.fromCharCode(code) : ch
  }

  return res
}
