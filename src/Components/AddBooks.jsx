import React from 'react'
import { useRef } from 'react'
import "../styles/addBook.css"

const AddBooks = () => {
  let author=useRef(null);
  let country=useRef(null);
  let imageLink=useRef(null);
  let language=useRef(null);
  let link=useRef(null);
  let pages=useRef(null);
  let title=useRef(null);
  let year=useRef(null);
  let description=useRef(null);

  let submit = (r) => {
    r.preventDefault() //prevent page from reloading
    let data = {
      author: author.current.value,
      country:country.current.value,
      imageLink:imageLink.current.value,
      language:language.current.value,
      link:link.current.value,
      pages:pages.current.value,
      title:title.current.value,
      year:year.current.value,
      description:description.current.value
      
      
    }
    fetch('http://localhost:4000/books',{
      method:'POST',
      headers:{"Content-Type":'application/json' },
      body:JSON.stringify(data)
    })
    alert('user added added...')
  }


  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
<form action="" onSubmit={submit}>
<div className="log" style={{width: "40%",height: "530px"}}>
    <h1 style={{color:"white"}}>Add Book</h1>
  <div className='dhanu'>
    <input ref={author} type="text" placeholder='add author name...' /> <br />
    <input ref={country} type="text" placeholder='add origin country' /> <br />
    <input ref={imageLink} type="text" placeholder='add imagelink...' /><br />
    <input ref={language} type="text" placeholder='add language...' /><br />
    <input ref={link} type="text" placeholder='add wikipedia link...' /><br />
    <input ref={pages} type="text" placeholder='add pages...' /><br />
    <input ref={title} type="text" placeholder='add title...' /><br />
    <input ref={year} type="text" placeholder='add year...' /><br />
    <input ref={description} type="text" placeholder='add description...' /><br />

  </div>
  <div className="btn">
    <button style={{color:"white" ,background:"blue"}}>Add</button>
  </div>
  </div>
</form>
  
</div>
  )
}
export default AddBooks