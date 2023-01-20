export const Hex = {
    hextoString: (r: string) => {
        let o = ''
        for (let t = r.split(''), e = 0; e < t.length / 2; e++) {
            const n = '0x' + t[2 * e] + t[2 * e + 1]
            o += String.fromCharCode(Number(n))
        }
        return o
    },
    stringtoHex: (r: string) => {
        let t = ''
        for (let o = 0; o < r.length; o++) {
            t += Hex.padTwo(r.charCodeAt(o).toString(16))
        }
        return t
    },
    padTwo: (r: string) => {
        const t = r.length
        return t === 0 ? '00' : t === 1 ? '0' + r : r
    },
    utf8Encode: (r: string) => {
        r = r.replace(/\r\n/g, '\n')
        let t = ''
        for (let o = 0; o < r.length; o++) {
            const e = r.charCodeAt(o)
            e < 128
                ? (t += String.fromCharCode(e))
                : (127 < e && e < 2048
                      ? (t += String.fromCharCode((e >> 6) | 192))
                      : ((t += String.fromCharCode((e >> 12) | 224)),
                        (t += String.fromCharCode(((e >> 6) & 63) | 128))),
                  (t += String.fromCharCode((63 & e) | 128)))
        }
        return t
    },
    utf8Decode: (r: string) => {
        let t = ''
        for (let o = 0, e = 0, c2 = 0, c3 = 0; o < r.length; ) {
            ;(e = r.charCodeAt(o)) < 128
                ? ((t += String.fromCharCode(e)), o++)
                : 191 < e && e < 224
                ? ((c2 = r.charCodeAt(o + 1)), (t += String.fromCharCode(((31 & e) << 6) | (63 & c2))), (o += 2))
                : ((c2 = r.charCodeAt(o + 1)),
                  (c3 = r.charCodeAt(o + 2)),
                  (t += String.fromCharCode(((15 & e) << 12) | ((63 & c2) << 6) | (63 & c3))),
                  (o += 3))
        }

        return t
    }
}

export const Base64 = {
    keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    encode: function (r: string) {
        let t: number,
            e: number,
            h: number,
            a: number,
            i: number,
            c: number,
            n: number,
            o = ''
        for (let d = 0; d < r.length; ) {
            a = (t = r.charCodeAt(d++)) >> 2
            i = ((3 & t) << 4) | ((e = r.charCodeAt(d++)) >> 4)
            c = ((15 & e) << 2) | ((h = r.charCodeAt(d++)) >> 6)
            n = 63 & h
            isNaN(e) ? (c = n = 64) : isNaN(h) && (n = 64)
            o = o + this.keyStr.charAt(a) + this.keyStr.charAt(i) + this.keyStr.charAt(c) + this.keyStr.charAt(n)
        }
        return o
    },
    decode: (r: string) => {
        let t: number,
            e: number,
            h: number,
            a: number,
            i: number,
            c: number,
            n = '',
            o = 0
        for (r = r.replace(/[^A-Za-z0-9+/=]/g, ''); o < r.length; ) {
            t = (Base64.keyStr.indexOf(r.charAt(o++)) << 2) | ((a = Base64.keyStr.indexOf(r.charAt(o++))) >> 4)
            e = ((15 & a) << 4) | ((i = Base64.keyStr.indexOf(r.charAt(o++))) >> 2)
            h = ((3 & i) << 6) | (c = Base64.keyStr.indexOf(r.charAt(o++)))
            n += String.fromCharCode(t)
            64 != i && (n += String.fromCharCode(e))
            64 != c && (n += String.fromCharCode(h))
        }
        return n
    }
}

export const Binary = {
    encode: (e: string) => {
        e = (e = e.replace(/(^\s+)|(\s+$)/g, '')).replace(/\s/g, '')
        const a: string[] = []
        for (let t = 0; t < e.length; t++) {
            const n = e.substring(t, t + 4)
            t += 3
            const s = parseInt(n, 2).toString(16)
            a.push(s)
        }
        return a.join('')
    },
    decode: (e: string) => {
        const a: string[] = []
        const t = (e = (e = e.replace(/(^\s+)|(\s+$)/g, '')).replace(/\s/g, '')).split('')
        for (let n = 0; n < t.length; n++) {
            0 != n && a.push(' ')
            const s = t[n]
            let o = parseInt(s, 16).toString(2)
            const l = o.length
            if (l < 4) {
                for (let c = 0; c < 4 - l; c++) {
                    o = '0' + o
                }
            }

            a.push(o)
        }
        return a.join('')
    }
}
