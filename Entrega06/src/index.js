// const server = require('./services/server');
const server = require('../src/services/server');
// const { initWsServer, getWsServer } = require('./services/socket');
const { initWsServer, getWsServer } = require('../src/services/socket');

const port = 8080;

//Init SocketIo Server
const init = async () => {
	initWsServer(server);
	server.listen(port, () => console.log(`Server Up port ${port}`));
}

init();