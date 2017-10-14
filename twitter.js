const Twitter = require('node-tweet-stream')
const credentials = require('./credentials')
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 5555 })

const KEYWORD = 'star wars'

console.log('starting WS server')

wss.on('connection', function connection(ws) {
  const tw = new Twitter(credentials)

  console.log('new client connected')
  tw.track(KEYWORD)

  tw.on('tweet', function(tweet) {
    try {
      // ws.send({id: tweet.status.id, text: tweet.text})
      ws.send(tweet.text)
    } catch(e) {
      console.log('client disconnected')
      ws.close()
      tw.abort()
    }
  })
})
