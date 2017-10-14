#  socket-test

Test websocket servers

##  Setup

`yarn`

##  Running

`yarn run twitter` Sends live tweets filtered by keyword (must rename credentials.js.template to credentials.js)

`yarn run stocks` Random float pushed at a specific interval

##  Receiving example

### vanilla js (browser)

```javascript
var socket = new WebSocket("ws://localhost:5555")
socket.onmessage = function(event) {
  console.log(event.data)
}
```

###  most.js

```javascript
import {fromWebSocket} from "most-w3msg"
/* const WebSocket = require('ws') // needed for node, but not browser */
const socket = new WebSocket('ws://localhost:5555')
const ws$ = fromWebSocket(socket, socket.close.bind(socket))
ws$.observe(packet => console.log(packet.data))
```
