const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/LocalDataBase';

mongoose.connect(url, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false, 
  useCreateIndex: true 
  });
mongoose.Promise = global.Promise;

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database conectado com sucesso! na porta padrão", url);
});

module.exports = mongoose;