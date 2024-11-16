import { faker } from '@faker-js/faker';

export function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        message: "April fool’s day",
        image: faker.image.avatar(),
    };
}

export function createRandomChatMessage() {
    return {
        messageId: faker.string.uuid(),
        sender: faker.number.int({ min: 1, max: 2 }),
        content: faker.lorem.sentence(), // Random text for the message
        sentAt: faker.date.recent(), // Timestamp of the message
        image: faker.image.avatar(), // Optional image
    };
}
