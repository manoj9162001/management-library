import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/bookList.css'


const BookList = () => {
  let loc=useLocation()
  let navigate = useNavigate()
  let location = useLocation()
  let [books, setBooks] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(' http://localhost:4000/books')
      let data = await response.json()
      setBooks(data)
    }
    fetchData()
  },[books]);

  let deleteBook = (id,title) => {
    fetch(`http://localhost:4000/books/${id}`,{
      method:'DELETE'
    })
alert (`${title} deleted successfully`)
  }
  
  let readBook =(id) => {
    if (location.pathname ==='/admin/book-list') {
      navigate(`/admin/book-list/${id}`)
  
    } else {
      navigate(`/userportal/book-list/${id}`)
    }

  }

  return (
    <div className='bookDetails'>
      {books.map(data => (
        <div className="bookData">
          <div className="bookdata2">
            <Link > <img className='bimg' src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" height="200px" width="150px" alt="" ></img></Link>
            <div className="details">
              <h2>{data.title}</h2>
              <h3>Author:{data.author}</h3>
              <h4>Language:{data.language}</h4>
              <h4>Pages:{data.pages}</h4>
              <h4>Published Year:{data.year}</h4>

              <button onClick={()=>readBook(data.id)}>Read Book</button>
              {loc.pathname==='/admin/book-list'&&<button  onClick={()=>deleteBook(data.id,data.title)}>Remove</button>}
            </div>
          </div>
        </div>
      )
      )

      }

    </div>
  )
}
export default BookList