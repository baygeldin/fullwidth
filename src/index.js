// Search in array is O(n), hashmaps are O(1),
// but char code evalution is still faster.
// Hope it's not penny-wise and pound-foolish.

function convertChar(code) {
    if (code >= 33 && code <= 126) {
        return code + 65248;
    } else if (code === 32 || (code >= 8192 && code <= 8201)) {
        return 12288;
    } else if (code === 163) {
        return code + 65342;
    } else if (code === 165) {
        return code + 65344;
    } else if (code === 183) {
        return code + 65198;
    } else if (code === 8361) {
        return code + 57149;
    } else if (code === 8373) {
        return code + 57131;
    }
}

function hasFullwidth(code) {
    // 33 - !, 126 - ~, 163 - £, 165 - ¥,
    // 183 - ·, 8361 - ₩, 8373 - ₵
    return code >= 32 && code <= 126 ||
        (code >= 8192 && code <= 8201) ||
        code === 163 || code === 165 ||
        code === 183 || code === 8361 ||
        code === 8373;
}

export default str => {
    let res = ''

    for (let ch of str) {
        let code = ch.charCodeAt(0);
        res += hasFullwidth(code) ?
            String.fromCharCode(convertChar(code)) : ch;
    }

    return res;
};
