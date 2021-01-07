const mongoose = require('mongoose');
import 'dotenv/config';
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;
const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

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