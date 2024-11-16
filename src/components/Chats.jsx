import React from "react";

const ChatMessages = ({ data }) => {
    return (
        data?.map((dt) => (
            <div className={`${dt?.sender == 2 ? "recieve-message" : "send-message ms-auto"}`}>
                {dt?.content}
            </div>
        ))
    )
}

export default ChatMessages