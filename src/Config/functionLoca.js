class GenerateItem {
    constructor () {
        this.itemLoco = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    }
    _id () {
        let id = '';
        for (let i = 0; i < 24; i++) {
            id += this.itemLoco[Math.floor(Math.random() * 62)];
        }
        return id;
    }

    returnObjectInsert (data) {
        return {
            "user_id" : data.user_id,
            "title": data.title,
            "category": data.category,
            "spent": data.spent,
            "date": data.date,
            "description": data.description
        }
    }

    acessLoginObjectSendEmail (info) {
        return {
            from: 'registryDriver@negrito.com.br',
            to: 'gsouza@3xsolutions.com.br',
            subject: 'Confirme E-mail',
            text: `Seja bem-vindo confirme seu e-mail para conclcuir seu acesso ${info.token}`
        }
    }
    
}

module.exports = new GenerateItem();