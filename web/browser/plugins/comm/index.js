import Vue from 'vue'
import ViewUI from 'view-design'
import locale from 'view-design/dist/locale/en-US' // Change locale, check node_modules/view-design/dist/locale
import Utils from '~/utils/index'
Vue.prototype.Utils = Utils

Vue.use(ViewUI, {
  locale
})

//mixin
Vue.mixin({
  methods: {
    substr (str, startNum, endNum) {
      if (!str) {
        return ''
      }
      if (endNum) {
        return str.slice(startNum, endNum)
      } else {
        return str.slice(startNum)
      }
    },
    goRouter (path, query = {}, replace = false) {
      this.$router.push({path: path, query: query})
    },
    numFormat (num, len) {
      if (!num) {
        return '-'
      }
      if (len) {
        num = this.Utils.tool.format.formatNumberDecimal(num, len)
      }

      num = parseFloat(num) + ''
      let source = num.replace(/\,|\￥/g, "").split(".")
      source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,")
      return this.Utils.tool.format.scientificNotationToString(source.join("."))
    },
    dataFormat (time, type = 'yyyy-MM-dd hh:mm:ss', format = false) {
      if (!time) {
        return '-'
      }
      time = parseFloat(time * 1000)
      if (!format) {
        let nowTime = parseInt((new Date().getTime() - time) / 1000)
        if (nowTime < 60) {
          return `${nowTime}secs ago`
        }
        if (nowTime < 3600) {
          return `${parseInt(nowTime/60%60)}mins ${parseInt(nowTime%60)}secs ago`
        }
        if (nowTime <= 86400) {
          return `${parseInt(nowTime/3600%24)}hrs ${parseInt(nowTime/60%60)}mins ago`
        }
        if (nowTime > 86400) {
          return `${parseInt(nowTime/3600/24)}days ${parseInt(nowTime/3600%24)}hrs ago`
        }
      }
      return this.Utils.tool.date.dateFormat(type, time)
    },
  }

})
