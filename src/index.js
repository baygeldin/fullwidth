import charCodes from './fullwidth'

const codes = Object
    .keys(charCodes)
    .reduce((map, key) => {
        map[key.charCodeAt(0)] = charCodes[key].charCodeAt(0)
        return map
    }, {})

export default str => {
    let res = '';

    for (let ch of str) {
        let code = codes[ch.charCodeAt(0)];
        res += code ? String.fromCharCode(code) : ch;
    }

    return res;
};
