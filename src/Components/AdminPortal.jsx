import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminHome from '../Components/AdminHome'
import BookList from '../Components/BookList'
import AdminNavBar from '../Components/AdminNavBar'
import AddBooks from '../Components/AddBooks'
import AddUser from  '../Components/AddUser'
import UserList from '../Components/UserList'
import '../styles/adminPortal.css'
import ReadBook from './ReadBook'
const AdminPortal = () => {
  return (
    <div className='main'>
      <div className="adminSide">
        <AdminNavBar />
      </div>
      <div className='adminRoute'>
        <Routes>
          <Route path="/" element={<AdminHome />}></Route>
          <Route path='/book-list' element={<BookList />}></Route>
          <Route path='/book-list/:id' element={<ReadBook />}></Route>
          <Route path='/add-books' element={<AddBooks />} />
          <Route path='/add-user' element={<AddUser/>} />
          <Route path='/user-list' element={<UserList/>} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminPortal