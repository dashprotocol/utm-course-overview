const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))