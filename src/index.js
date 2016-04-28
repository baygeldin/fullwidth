import charCodes from './fullwidth'

const codesMap = Object
  .keys(charCodes)
  .reduce((map, key) => {
    map[key.codePointAt()] = charCodes[key].codePointAt()
    return map
  }, {})

export default (str) => {
  let res = ''

  for (let ch of str) {
    let code = codesMap[ch.codePointAt()]
    res += code ? String.fromCodePoint(code) : ch
  }

  return res
}
