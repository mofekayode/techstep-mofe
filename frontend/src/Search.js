import React,{useState, useEffect} from 'react'
import { Link} from "react-router-dom";
import logo_green from './logo_green.png';
import './Search.css';
function Search() {

    const [search,setSearch]=useState('')
    const [theusers,setUsers]=useState([])
    const [clicked,setclicked]=useState(false)
    const [hasinfo,sethasinfo]=useState(false)
     
    const handleSubmit =(e)=>{
        setclicked(true)
        e.preventDefault()
        console.log(search)
   
        fetch(`http://localhost:5000/recover/${search}`)
        .then(response => response.json())
        .then(data => 
            setUsers(data)
            
        );
          
          if(theusers.length==0){
            sethasinfo(true)
            console.log(hasinfo)
        }
         else{
            sethasinfo(false)
            console.log(search)
        }
        
 
        
     }
     useEffect(()=>{
        if(theusers.length!=0 && clicked==true){
            sethasinfo(false)
            console.log(hasinfo)
        }else{
            console.log(hasinfo)
        }
       
     },[clicked])
    return(
    <div>
      <div className="header">
          <header className="app-header">
            <Link to="/" className='link'>
              <img src={logo_green} className="WebLogo" alt="Website-logo" />
            </Link>
        
          </header>
    
        </div>
        <div className={clicked?'hero-tag-active':"hero-tag"}>
             <h1>
                 Browse the Database 
             </h1>
        </div>
        <div className="searchBar">
              <input onChange={(e) => setSearch(e.target.value)}type="text" id="search" name="search" placeholder='Type in a name'/>
              <div onClick={handleSubmit}className="srch-Btn"><p style={{fontSize:'20px'}}>Search</p></div>
        </div>
       { clicked==true&&theusers.length==0?<h1 className='showing'>Sorry there is no entry for {search} :(</h1>:``}
      
            {
            theusers.map((info)=>(
               
                <div className='card'>
        <div className='card-left'>
            <div className='profile'>{info.name.match(/\b(\w)/g).join('')}</div>
                <h2>{info.name}</h2>
                <h3>{info.age?info.age+ ' years':''}</h3>
        </div> 
        <div className='card-right'>
            <h3>{info.email?info.email:''}</h3>
            <h3>{info.location?info.location:''}</h3>
            <h4 class={info.is_registered==1?'registered':'unregistered'}>{info.is_registered==1?'registered':'unregistered'}</h4>
        </div> 
    </div>

              
                
            ))
            }
  
  
        </div>
        
     

      )
    
}

export default Search
