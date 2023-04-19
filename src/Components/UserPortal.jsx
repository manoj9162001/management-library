import { Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import UserNavBar from "./UserNavBar";
import React from 'react'
import UserHome from "./UserHome";
import '../styles/adminPortal.css'
import ReadBook from "./ReadBook";

const UserPortal = () => {
    return (
        <div className="main" >
            <div className="adminSide">
                <UserNavBar />
            </div>
            <div className="adminRoute">
                <Routes>

                    <Route path="/" element={<UserHome />}></Route>

                    <Route path="/book-list" element={<BookList />}></Route>
                    <Route path="/book-list/:id" element={<ReadBook />}></Route>
                </Routes>
            </div>
        </div>
    )
}
export default UserPortal