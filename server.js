const express = require('express')
const server = express()
const port = 3003;
const { Client } = require('pg')
const client = new Client()



server.get('/api/item-list', async(req, res)=>{
    await client.connect()

const des = await client.query('select * from grocery_items')
await client.end()
res.send(des.rows);
});
server.get('/api/item-list',(req,res)=>res.send('GroceryItems'));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));