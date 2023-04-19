import React from 'react'
import { useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ReadBook = () => {
  const [dataOb,setDataOb]=useState({})
  let navi=useNavigate();
    let params=useParams()
useEffect(()=>
{
    let fetchData=async()=>{
        let response = await fetch(`http://localhost:4000/books/${params.id}`)
        let data = await response.json()
        setDataOb({...data})
    }
    fetchData();
   
})
  return (
    <div className='readbook'>
    <h1>Description...</h1>
   <div className="text">{dataOb.description}</div> 
   <div>
    <a className='belowbtn' style={{textDecoration:"none",boxSizing:"border-box",padding:"10px",top:"2px",position:"relative"}} href={dataOb.link}>Check on Wikipedia</a>
    <button className='belowbtn' onClick={()=>navi('/admin/book-list')}>GO back to Booklists</button>
   </div>
    </div>
  )
}

export default ReadBook