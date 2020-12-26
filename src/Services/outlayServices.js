const dataBase = [];

class outlayService {
    constructor () {

    }

    async store (data) {
        dataBase.push(data);
        const baseInsertItens = dataBase.find(x => x.id === data.id);
        if (baseInsertItens) {
            return `Registrado com sucesso`
        } else {
            return `Deu ruim`
        }
    }

    async index () {
        return dataBase
    }
}

module.exports = new outlayService();