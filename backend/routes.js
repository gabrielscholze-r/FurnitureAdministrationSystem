const express = require('express');
const routes = express.Router();

const SofaController = require('./controllers/SofaController');
//rota sofa
routes.post('/sofa', SofaController.create);
routes.get('/sofa', SofaController.read);
routes.delete('/sofa/:id',SofaController.delete);

const TableController = require('./controllers/TableController');

routes.post('/table', TableController.create);
routes.get('/table', TableController.read);
routes.delete('/table/:id', TableController.delete);

const ChairController = require('./controllers/ChairController');
routes.post('/chair', ChairController.create);
routes.get('/chair', ChairController.read);
routes.delete('/chair/:id', ChairController.delete);


module.exports = routes;