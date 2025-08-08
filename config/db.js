const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
.then((res)=>{
   console.log("database connection success",res);
}).catch((err)=>{
    console.log("database connection failed");
});