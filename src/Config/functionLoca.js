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
            "id": this._id(),
            "title": data.title,
            "category": data.category,
            "spent": data.spent,
            "date": data.date
        }
    }
}

module.exports = new GenerateItem();