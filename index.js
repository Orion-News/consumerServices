const server = require('./server');

server.listen(process.env.PORT || 3000, () => {
    console.log(`subiu na porta ${3000}; para acessar click -> http://localhost:${3000}`);
});