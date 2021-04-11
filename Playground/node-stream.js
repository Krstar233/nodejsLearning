import { createServer } from 'http';
const port = 8080;
const server = createServer((req, res) => {
    res.end('Hello, world.');
});
server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port);
});