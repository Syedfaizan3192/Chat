import React from "react";
import { Col, Row } from "react-bootstrap";
import ChatThread from "../components/ChatThreads";
import Inbox from "../components/Inbox";

const Messages = () => {
    return (
        <div className="chat-message mt-5 container">
            <Row>
                <Col md={4}>
                    <ChatThread />
                </Col>
                <Col md={8}>
                    <Inbox />
                </Col>
            </Row>
        </div>
    )
}

export default Messages