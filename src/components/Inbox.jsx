import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";

import user from "../assets/images/profile.png";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ChatMessages from "./Chats";
import { createRandomChatMessage } from "../utils/fakerData";
import { faker } from "@faker-js/faker";

const Inbox = () => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const chatMessages = faker.helpers.multiple(createRandomChatMessage, {
        count: 15,
    });
    console.log(chatMessages, 'chatMessages');


    const { handleSubmit, register, control, reset, watch, getValues, formState: { errors } } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="chat-inbox">
            <div className="thread-box top-header d-flex justify-content-between align-items-start mb-2">
                <div className="d-flex align-items-start profile-image">
                    <img src={user} alt="profile-img" className="image-fluid object-fit-contain rounded-circle" />
                    <div className="profile-detail ms-3">
                        <h3>ABC</h3>
                        <p>Online - Last seen, 2.02pm</p>
                    </div>
                </div>
                <div className="profile-content">
                    <HiOutlineDotsVertical size={25} className="cursor" />
                </div>
            </div>
            <div className="chats">
                <ChatMessages data={chatMessages} />
            </div>
            <div className="input-submit">
                <Form.Group className="custom-textarea">
                    <Form.Control
                        as="textarea"
                        placeholder={"Type Message Here"}
                        minLength={1}
                        maxLength={150}
                        value={value}
                        onChange={(e) => setValue(e?.target?.value)}
                        disabled={loading}
                    />
                </Form.Group>
                <Button type="submit" className="send" onSubmit={onSubmit}>
                    <BsFillSendFill size={25} color="black" />
                </Button>
            </div>
        </div>
    )
}

export default Inbox;