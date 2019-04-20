const express = require('express')
const server = express()
const port = 3003

server.get('/', (req, res) => res.send('Hello World!'));
server.get('/api/item-list', (req, res) => res.send('show the grocerylist of projectof blog'));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));