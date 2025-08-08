const { config } = require('dotenv');
const express = require('express');
config();
const app = express();
const port = process.env.PORT || 8000
// const database = require('./config/db');

app.listen((req,res)=>{
   console.log(`server is running at port ${port}`);
})