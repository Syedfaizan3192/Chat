import React from "react";

import profile from "../assets/images/profile.png";
import { limitWords } from "../utils/helper";

const ThreadBox = ({ data }) => {
    return (
        data?.map((dt) => (
            <div className="thread-box cursor d-flex justify-content-between align-items-start mb-2" key={dt?.userId}>
                <div className="d-flex align-items-start profile-image">
                    <img src={dt?.image} alt="profile-img" className="image-fluid object-fit-contain rounded-circle" />
                    <div className="profile-detail ms-3">
                        <h3>{limitWords(dt?.username, 1)}</h3>
                        <p>{dt?.message}</p>
                    </div>
                </div>
                <div className="profile-content">
                    <p>Today, 9.52pm</p>
                </div>
            </div>
        ))
    )
}

export default ThreadBox;