const express = require('express');
// const session = require('express-session');
// const fileupload = require('express-fileupload');
// const fs = require('fs');
// const cors = require('cors');
const app = express();
// var path = require('path');
require('./config/dbConfig')
app.use(express.json())
const routes = require('./routes')





const port = 5000;

// app.use(session({secret: 'qwertyuiopasdfghjklzxcvbnm'}));
// app.use(express.json());
// app.use(fileupload({
//     useTempFiles: true,
//     tempFileDir: path.join(__dirname, 'temp')
// }));
// app.use(cors());
app.use(routes)
// app.get('/Home',(req,res)=>{
//     res.json([{'título': 'Noticia boa dimais'}])
// })

app.listen(port, () =>{console.log("rodando porta 5000")});