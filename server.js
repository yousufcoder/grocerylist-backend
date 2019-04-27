const express = require('express')
const server = express()
const port = 3003;
const { Client } = require('pg')
const client = new Client()
const startcon = async()=>{
    await client.connect()
}
startcon();




server.get('/api/item-list', async(req, res)=>{
const des = await client.query('select * from grocery_items')

res.setHeader("Access-Control-Allow-Origin","*");
res.send(des.rows);
res.end();
});
//await client.end()
server.listen(port, () => console.log(`Example app listening on port ${port}!`));

