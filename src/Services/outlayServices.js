const dataBase = [];

// adicionar await nos metodos ao adicionar db;
class outlayService {
    constructor () {

    }

    async store (data) {
        dataBase.push(data);
        const baseInsertItens = dataBase.find(x => x.id === data.id);
        return baseInsertItens ? `Registrado com sucesso` : `Deu ruim pra cadastrar`;
    }

    async index () {
        return dataBase;
    }

    async show (id) {
        const findItem = dataBase.find(x => x.id === id);
        return findItem ? findItem : `Usuario não existe`;
    }

    async update (id, updateItem) {
        const ItemIndex = dataBase.findIndex(x => x.id === id);
        dataBase.splice(ItemIndex, 1);
        dataBase.push(updateItem);
        const updatedItem = dataBase.find(x => x.id === updateItem.id)
        return updatedItem ? `Atualizado com sucesso` : `Deu ruim ao atualizar`;
    }

    async destroy (id) {
        const destroys = dataBase.findIndex(x => x.id === id);
        const del = dataBase.splice(destroys, 1);
        return del ? `Item Deletado` : `berrou ao remover`
    }
}

module.exports = new outlayService();