import React from "react";
import { faker } from "@faker-js/faker";

import ThreadBox from "./ThreadBox";
import { createRandomUser } from "../utils/fakerData";

const ChatThread = () => {
    const threads = faker.helpers.multiple(createRandomUser, {
        count: 15,
    });

    return (
        <div className="chat-threads">
            <ThreadBox data={threads} />
        </div>
    )
}

export default ChatThread;