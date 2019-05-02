const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = 3003;
const { Client } = require('pg')
const client = new Client()
const startcon = async () => {
    await client.connect()
}
startcon();




server.get('/api/item-list', async (req, res) => {
    const des = await client.query('select * from grocery_items')

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(des.rows);
    res.end();
});
//await client.end()
server.use(bodyParser.urlencoded({ extended: true }));
server.post('/api/item-list', async (req, res) => {
    console.log(req.body);
    res.send('Get post data');
    const text = 'insert into grocery_items(id,itemname,quantity,amount)  values($1,$2,$3,$4) returning *'
    const values = [req.body.id, req.body.itemname, req.body.quantity, req.body.amount]
    const des = client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows)
        }
    });
});

    //const des = await client.query('insert into grocery_items(id,itemname,quantity,amount)  values($1,$2,$3,$4),(req.body.id,req.body.itemname,req.body.quantity,req.body.amount)');
    

server.listen(port, () => console.log(`Example app listening on port ${port}!`));

