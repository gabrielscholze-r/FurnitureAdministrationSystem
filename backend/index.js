require('dotenv').config()
const express = require('express');
// const session = require('express-session');
// const fileupload = require('express-fileupload');
// const fs = require('fs');
const cors = require('cors');
const app = express();
process.env.PASSWORD
// var path = require('path');
require('./config/dbConfig')
app.use(express.json())
const routes = require('./routes')
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSucessStatus: '200'
}
app.use(cors(corsOptions))




const port = 5000;

// app.use(session({secret: 'qwertyuiopasdfghjklzxcvbnm'}));
// app.use(express.json());
// app.use(fileupload({
//     useTempFiles: true,
//     tempFileDir: path.join(__dirname, 'temp')
// }));
app.use(routes)

app.listen(port, () =>{console.log("rodando porta 5000")});