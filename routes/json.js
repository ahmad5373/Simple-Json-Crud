const express = require('express');
const Router = express.Router();

const json_controller = require('../controller/json_controller');

Router.get("/getjson" , json_controller.getjson);
Router.post("/postprovance" , json_controller.postprovance);
Router.post("/postcities" , json_controller.postcities);
Router.post("/postlanguage" ,json_controller.postlanguage);
Router.put("/updateprovance" , json_controller.updateprovance);
Router.put("/updatecities" , json_controller.updatecities);
Router.put("/updatelanguage" , json_controller.updatelanguage);
Router.delete("/deleteprvnce" , json_controller.deleteprovance);

module.exports= Router;