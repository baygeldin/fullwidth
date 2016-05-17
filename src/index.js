import dakutenMap from './dakuten'
import handakutenMap from './handakuten'
import charMap from './fullwidth'

const dakuten = '\uFF9E'
const handakuten = '\uFF9F'

function charMapToCodesMap (charMap) {
  return Object
    .keys(charMap)
    .reduce((map, key) => {
      map[key.charCodeAt()] = charMap[key].charCodeAt()
      return map
    }, {})
}

const dakutenCodesMap = charMapToCodesMap(dakutenMap)
const handakutenCodesMap = charMapToCodesMap(handakutenMap)
const codesMap = charMapToCodesMap(charMap)

export default (str) => {
  let res = ''

  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt()
    let fullwidthCode
    let mark = str[i + 1]

    if (mark === dakuten) {
      fullwidthCode = dakutenCodesMap[code]
    } else if (mark === handakuten) {
      fullwidthCode = handakutenCodesMap[code]
    }

    if (fullwidthCode) {
      i++
    } else {
      fullwidthCode = codesMap[code]
    }

    res += fullwidthCode ? String.fromCharCode(fullwidthCode) : str[i]
  }

  return res
}
