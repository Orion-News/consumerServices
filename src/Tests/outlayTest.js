import { deepEqual, ok } from 'assert';
import outlayService from '../App/Services/outlayServices.js';

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
        "_id": "5ff3d4cd80c85d15c01ff3d5",
        "title": "almoço",
        "category": "food",
        "spent": 30,
        "date": "29/11/2020",
        "description": "bla bla bla blabla",
        "__v": 0
      }
};

describe('pequenos testes para desembolsar SERVICES', () => {
    
    it('cadastrar um gasto', async () => {
        const expectedItem = default_file_expected_register;

        const insertItemExpected = await outlayService.store(expectedItem.data);
        const showExpectedItem = await outlayService.show(insertItemExpected._id);

        ok(insertItemExpected, showExpectedItem, expectedItem.data);
    });

    it('deve listar um gasto', async () => {
        const expected = default_file_expected_updated.data;

        const showExpectedItem = await outlayService.show('5ff3d4cd80c85d15c01ff3d5');
        deepEqual( JSON.stringify(showExpectedItem),  JSON.stringify(expected));
    });

    it('deve atualizar um gasto pelo id', async () => {
        const expected = default_file_expected_updated.data;
    
        const newObj = default_file_expected_updated.data;
    
        await outlayService.update(expected._id, newObj);
        const showExpectedItem = await outlayService.show(expected._id);
    
        deepEqual(JSON.stringify(showExpectedItem), JSON.stringify(expected));
    });

    it('deve deletar um gasto pelo id', async () => {
        const expected = "5ff3d6e6e12aed3770d4d5d4";
        const { data } = default_file_expected_register;
        const deleteExpectedItem = await outlayService.destroy(data._id);
        ok(JSON.stringify(deleteExpectedItem), JSON.stringify(expected));
    });
});