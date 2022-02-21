class socket {
  constructor(url) {
    this.messageMap = {}
    this.connState = 0
    this.socket = null
    this.url = url
  }
  doOpen() {
    if (this.connState) return
    this.connState = 1
    const BrowserWebSocket = window.WebSocket || window.MozWebSocket
    const socket = new BrowserWebSocket(this.url)
    socket.binaryType = 'arraybuffer'
    socket.onopen = evt => this.onOpen(evt)
    socket.onclose = evt => this.onClose(evt)
    socket.onmessage = evt => this.onMessage(evt.data)
    socket.onerror = err => this.onError(err)
    this.socket = socket
  }
  onOpen(evt) {
    this.connState = 2
    this.onReceiver({ Event: 'open' })
  }
  checkOpen() {
    return this.connState === 2
  }
  onClose(res) {
    console.log(res)
    if (this.connState) {
      this.onReceiver({ Event: 'close' })
      this.connState = 0
    }
  }
  send(data) {
    if (Object.prototype.toString.call(data) === '[object Object]') {
      this.socket.send(JSON.stringify(data))
    } else {
      this.socket.send(data)
    }
  }
  emit(data) {
    return new Promise(resolve => {
      this.socket.send(JSON.stringify(data))
      this.on('message', data => {
        resolve(data)
      })
    })
  }
  onMessage(message) {
    if (message == 'pong') {
      return false
    }
    try {
      let str = message.replace(/\:(\d+)(\,|\})/g, (a, b, c, d, e) => {
        return (':"'+b+'"'+ c)
      });
      const data = JSON.parse(str)
      this.onReceiver({ Event: 'message', Data: data })
    } catch (err) {
      console.error(' >> Data parsing error:', err)
    }
  }

  onError(err) {
    console.log(`sockect err .${err}`)
  }
  onReceiver(data) {
    const callback = this.messageMap[data.Event]
    if (callback) callback(data.Data)
  }
  on(name, handler) {
    this.messageMap[name] = handler
  }
  doClose() {
    this.socket.close()
  }
  destroy() {
    this.doClose()
    this.messageMap = {}
    this.connState = 0
    this.socket = null
  }
}

export default socket
