import React from "react";
import { Route, Routes } from "react-router-dom";
import { navigationsConstants } from "../utils/navigation-constants";
import Messages from "../pages/Messages";


const Navigations = () => {
    return (
        <>
            <Routes>
                <Route path={navigationsConstants.chat} element={<Messages />}></Route>
            </Routes>
        </>
    )
}

export default Navigations