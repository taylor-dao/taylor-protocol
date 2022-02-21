export default {
  formatNumberDecimal (value, num){
    let a, b, c, i;
    a = String(value)
    b = a.indexOf(".")
    c = a.length
    if (num == 0) {
      if (b != -1) {
        a = a.substring(0, b)
      }
    } else {
      //If there is no decimal point
      if (b == -1) {
        a = a + "."
        for (i = 1; i <= num; i++) {
          a = a + "0"
        }
      } else {
        // If there is a decimal point, it will be intercepted automatically if it exceeds the number of digits, otherwise 0 will be added
        a = a.substring(0, b + num + 1)
        for (i = c; i <= b + num; i++) {
          a = a + "0"
        }}
    }

    return a
  },
  scientificNotationToString(param) {
    let strParam = String(param)
    let flag = /e/.test(strParam)
    if (!flag) return param


    let sysbol = true
    if (/e-/.test(strParam)) {
      sysbol = false
    }

    let index = Number(strParam.match(/\d+$/)[0])

    let basis = strParam.match(/^[\d\.]+/)[0].replace(/\./, '')

    if (sysbol) {
      return basis.padEnd(index + 1, 0)
    } else {
      return basis.padStart(index + basis.length, 0).replace(/^0/, '0.')
    }
  },
}
