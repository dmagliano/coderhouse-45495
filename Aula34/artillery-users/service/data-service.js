import {fakerPT_BR as faker} from '@faker-js/faker';

export const getUsers = () => {

    return {
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.exampleEmail(),
        password: "123456test"
    }

};