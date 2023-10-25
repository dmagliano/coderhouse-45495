import supertest from 'supertest';
import { expect } from 'chai';

const requester = supertest('http://localhost:3000');

describe('Testing API da integradora', () => {

    describe('Teste de listagem de usuarios', () => { 

        it('Deve retornar um array com 1 usuario', async () => {
        
            const { body } = await requester.get('/');

            expect(body).to.be.an('array');
            expect(body).to.have.lengthOf.gte(0);
        });
    });

    describe('Teste de cadastro de usuarios', () => { 

        it('Deve retornar um array com 1 usuario', async () => {

            const new_user = {
                first_name: "Usuario",
                last_name: "Teste",
                email: "usuario.teste@email.com",
            }
        
            const { body } = await requester.post('/users').send(new_user);

            expect(body).to.be.ok;
        });
    });

});
