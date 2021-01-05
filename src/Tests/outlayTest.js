const { deepEqual, ok } = require('assert');
const outlayService = require('../App/Services/outlayServices.js');

const default_file_expected_register = {
	"data" : {
		"title" : "almoço",
		"category": "food",
		"spent": 30.00,
        "date": "29/11/2020",
        "description": "bla bla bla blabla"
	}
};

const default_file_expected_updated = {
    "data" : { 
        "title" : "pneu",
        "category" : "mecanic",
        "spent" : "30,00",
        "date" : "29/11/2020"
    }
};

describe('pequenos testes para desembolsar SERVICES', () => {
    
    it('cadastrar um gasto', async () => {
        const expectedItem = default_file_expected_register;

        const insertItemExpected = await outlayService.store(expectedItem.data);
        // const showExpectedItem = await outlayService.show(expectedItem._id);

        ok(insertItemExpected, expectedItem.data);
    });

    // it('deve listar um gasto', async () => {
    //     const expected = default_file_expected_register.data;

    //     const showExpectedItem = await outlayService.show(expected.id);

    //     deepEqual(showExpectedItem, expected);
    // });

    // it('deve atualizar um gasto pelo id', async () => {
    //     const expected = default_file_expected_updated;
    
    //     const newObj = default_file_expected_updated;
    
    //     await outlayService.update(expected.id, newObj);
    //     const showExpectedItem = await outlayService.show(expected.id);
    
    //     deepEqual(showExpectedItem, expected);
    // });

    // it('deve deletar um gasto pelo id', async () => {
    //     const expected = "Item Deletado";
    //     const { data } = default_file_expected_register;
    //     const deleteExpectedItem = await outlayService.destroy(data.id);
    //     ok(deleteExpectedItem, expected);
    // });
});