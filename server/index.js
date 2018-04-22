let env = process.env.NODE_ENV || 'development'

let settings = require('./config/settings')[env]

const app = require('express')()

let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('new-message', (message) => {
        io.emit('new-message', message);
    });
});

require('./config/database')(settings)
require('./config/express')(app)
require('./config/routes')(app)

server.listen(settings.port)
console.log(`Server listening on port ${settings.port}...`)
