// Search in array is O(n), hashmaps are O(1),
// but char code evalution is still faster.
// Hope it's not penny-wise and pound-foolish.

function convertChar(code) {
    if (code >= 33 && code <= 126) {
        return code + 65248;
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
    } else if (code >= 65377 && code <= 65439) {
        return halfWidthKanaCodes[code]
    }
}

const halfWidthKanaMap = {
    '｡': '。',
    '｢': '「',
    '｣': '」',
    '､': '、',
    '･': '・',
    'ｦ': 'ヲ',
    'ｧ': 'ァ',
    'ｨ': 'ィ',
    'ｩ': 'ゥ',
    'ｪ': 'ェ',
    'ｫ': 'ォ',
    'ｬ': 'ャ',
    'ｭ': 'ュ',
    'ｮ': 'ョ',
    'ｯ': 'ッ',
    'ｰ': 'ー',
    'ｱ': 'ア',
    'ｲ': 'イ',
    'ｳ': 'ウ',
    'ｴ': 'エ',
    'ｵ': 'オ',
    'ｶ': 'カ',
    'ｷ': 'キ',
    'ｸ': 'ク',
    'ｹ': 'ケ',
    'ｺ': 'コ',
    'ｻ': 'サ',
    'ｼ': 'シ',
    'ｽ': 'ス',
    'ｾ': 'セ',
    'ｿ': 'ソ',
    'ﾀ': 'タ',
    'ﾁ': 'チ',
    'ﾂ': 'ツ',
    'ﾃ': 'テ',
    'ﾄ': 'ト',
    'ﾅ': 'ナ',
    'ﾆ': 'ニ',
    'ﾇ': 'ヌ',
    'ﾈ': 'ネ',
    'ﾉ': 'ノ',
    'ﾊ': 'ハ',
    'ﾋ': 'ヒ',
    'ﾌ': 'フ',
    'ﾍ': 'ヘ',
    'ﾎ': 'ホ',
    'ﾏ': 'マ',
    'ﾐ': 'ミ',
    'ﾑ': 'ム',
    'ﾒ': 'メ',
    'ﾓ': 'モ',
    'ﾔ': 'ヤ',
    'ﾕ': 'ユ',
    'ﾖ': 'ヨ',
    'ﾗ': 'ラ',
    'ﾘ': 'リ',
    'ﾙ': 'ル',
    'ﾚ': 'レ',
    'ﾛ': 'ロ',
    'ﾜ': 'ワ',
    'ﾝ': 'ン',
    'ﾞ': '゛',
    'ﾟ': '゜'
}

const halfWidthKanaCodes = Object
    .keys(halfWidthKanaMap)
    .reduce((map, key) => {
        map[key.charCodeAt(0)] = halfWidthKanaMap[key].charCodeAt(0)
        return map
    }, {})

function hasFullwidth(code) {
    // 33 - !, 126 - ~, 163 - £, 165 - ¥,
    // 183 - ·, 8361 - ₩, 8373 - ₵
    return code >= 33 && code <= 126 ||
        code === 163 || code === 165 ||
        code === 183 || code === 8361 ||
        code === 8373 ||
        (code >= 65377 && code <= 65439);
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
