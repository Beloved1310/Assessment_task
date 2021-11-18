import React from 'react'
import { useGlobalContext } from '../context'
import Button from './Button'
import 'font-awesome/css/font-awesome.min.css';
import {
  FaBell,
 
} from 'react-icons/fa';
import Avatar from './Avatar';



export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const { cocktails } = useGlobalContext()
  const searchValue = React.useRef('')
  
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
 
  return (
    <section className=''>
      <div className=''>
      <div className= 'section_search'>
    
      
      
      <form className='search_wrap search_wrap_5' onSubmit={handleSubmit}>
        <div className='search_box'>
          
          <input
          className="input"
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail} placeholder="find something.........."
          />
   
					<button className= "btni" onClick={handleSubmit}>Search</button> 
          
        </div>
        
        
      </form>
      
      </div>
      <div className = "aside">
      < FaBell className= "bell"/>
      
      {cocktails.slice(0,1).map((item) => {
          return <Avatar key={item.id} {...item} />
        })}
      </div>
      
      
      </div>
     
      <Button/>
    </section>
  )
}

