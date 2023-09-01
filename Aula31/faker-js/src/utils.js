import {fakerPT_BR as faker} from '@faker-js/faker';

export const generateUser = () => {

    let numberOfProducts = parseInt(Math.floor(Math.random() * 10));
    let products = [];

    for(let i = 0; i < numberOfProducts; i++) {
        products.push(generateProducts());
    }

    return {
        name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        gender: faker.person.sex(),
        birth_date: faker.date.birthdate(),
        phone: faker.phone.number(),
        email: faker.internet.exampleEmail(),
        products
    }

};

export const generateProducts = () => {

    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        id: faker.database.mongodbObjectId(),
        image: faker.image.url(),
    }

};