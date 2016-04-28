/* eslint-disable no-undef */

import { should } from 'chai'
import fullwidth from '../src'

should()

describe('fullwidth text converter', () => {
  it('converts numbers correctly', () => {
    let original = '0123456789'
    let converted = '０１２３４５６７８９'
    fullwidth(original).should.equal(converted)
  })

  it('converts capital letters correctly', () => {
    let original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let converted = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ'
    fullwidth(original).should.equal(converted)
  })

  it('converts small letters correctly', () => {
    let original = 'abcdefghijklmnopqrstuvwxyz'
    let converted = 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ'
    fullwidth(original).should.equal(converted)
  })

  it('converts symbols correctly', () => {
    let original = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
    let converted = '！＂＃＄％＆（）＊＋，－．／：；＜＝＞？＠［］＾＿｀｛｜｝～'
    fullwidth(original).should.equal(converted)
  })

  it('converts white spaces correctly', () => {
    let original = ' \t \u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009'
    let converted = '　\t　　　　　　　　　　　'
    fullwidth(original).should.equal(converted)
  })

  it('converts additional symbols correctly', () => {
    let original = '·₵£¥₩'
    let converted = '･￠￡￥￦'
    fullwidth(original).should.equal(converted)
  })

  it('converts slash correctly', () => {
    let original = '\\'
    let converted = '＼'
    fullwidth(original).should.equal(converted)
  })

  it('converts quote correctly', () => {
    let original = '\''
    let converted = '＇'
    fullwidth(original).should.equal(converted)
  })

  it('does not convert other symbols', () => {
    let original = 'пиздеть – не мешки ворочать'
    let converted = 'пиздеть　–　не　мешки　ворочать'
    fullwidth(original).should.equal(converted)
  })

  it('converts half-width katatana letters to fullwidth katakana', () => {
    let original = '｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ'
    let converted = '。「」、・ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜'
    fullwidth(original).should.equal(converted)
  })
})
