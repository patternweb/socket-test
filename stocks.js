const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 5555})

const INTERVALMS = 1000

console.log('starting WS server')

const sendStock = ws => () => {
  try {
    const stockPrice = 70 + (Math.random() * 30)
    console.log(`sending ${stockPrice}`)
    ws.send(stockPrice)
    setTimeout(sendStock(ws), INTERVALMS)
  } catch(e) {
    console.log('client disconnected')
    ws.close()
  }
}

wss.on('connection', function connection(ws) {
  console.log('new client connected')
  sendStock(ws)()
})
