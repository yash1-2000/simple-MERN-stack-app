const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
      await mongoose.connect('', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});
      console.log('database connected')
    }catch(err){
        console.log(err.message)
        // exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;