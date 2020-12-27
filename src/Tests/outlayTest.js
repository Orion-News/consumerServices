const { deepEqual, ok } = require('assert');
const outlayService = require('../Services/outlayServices.js');

const default_file_expected_register = {
	"data" : {
		"id" : "1",
		"title" : "almoço",
		"category": "food",
		"spent": "30,00",
		"date": "29/11/2020"
	}
};

describe('pequenos testes para desembolsar', () => {
    
    it('cadastrar um gasto', async () => {
        const expectedItem = default_file_expected_register;

        const insertItemExpected = await outlayService.store(default_file_expected_register.data);
        const showExpectedItem = await outlayService.show(default_file_expected_register.id);

        ok(insertItemExpected, showExpectedItem, expectedItem);
    });

    it('deve listar um gasto', async ()=>{
        const expected = default_file_expected_register.data;

        const showExpectedItem = await outlayService.show(expected.id);

        deepEqual(showExpectedItem, expected);
    });


    it('deve atualizar um gasto pelo id', async ()=> {
        const expected = {
            id: "1",    
            title: "pneu",
            category: "mecanic",
            spent: "30,00",
            date: "29/11/2020"
        }
    
        const newObj = {
  	        id: "1",    
            title: "pneu",
            category: "mecanic",
            spent: "30,00",
            date: "29/11/2020"
        }
    
        await outlayService.update(expected.id, newObj)
        const showExpectedItem = await outlayService.show(expected.id)
    
        deepEqual(showExpectedItem, expected)
        })
});