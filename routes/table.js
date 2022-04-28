const express = require('express');
const Router = express.Router();


const tabl_controller = require('../controller/table_controller');

Router.post("/gettable" , tabl_controller.gettable);



module.exports = Router;