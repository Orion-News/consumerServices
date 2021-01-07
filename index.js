import server from './server.js';
server.listen(process.env.PORT, () => {
    console.log(`subiu na porta ${process.env.PORT}; para acessar click -> http://${process.env.DB_HOST}:${process.env.PORT}`);
});