import charCodes from './fullwidth'

const codes = Object
    .keys(charCodes)
    .reduce((map, key) => {
        map[key.codePointAt(0)] = charCodes[key].codePointAt(0)
        return map
    }, {})

export default str => {
    let res = '';

    for (let ch of str) {
        let code = codes[ch.codePointAt(0)];
        res += code ? String.fromCodePoint(code) : ch;
    }

    return res;
};
