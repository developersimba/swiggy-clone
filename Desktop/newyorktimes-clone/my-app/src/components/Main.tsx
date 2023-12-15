import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Sidebar from './Sidebar'
import News from './News'
import Footer from './Footer'

const Main = () => {

    const [news,setNews] = useState([])
    const [menu,setMenu] = useState("")
    const [search,setSearch] = useState("")
    
    const searchRef = useRef(null)

    const getNews = async() =>{
        try{
            await  fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=popularity&apiKey=6046867fa79f4b379c70524289a2823b`)
            .then(res => res.json())
            .then(json => setNews(json?.articles))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getNews()   
    },[menu])

  return (
    <div>
      <Navbar searchRef={searchRef} setMenu={setMenu} setSearch={setSearch}/>
      <div className='flex mt-3'>
      <Home news={news} num="0"/>
      <Sidebar news={news} num="10"/>
      </div>
      <hr/>
      <div className='flex mt-3'>
      <Home news={news} num="5"/>
      <Sidebar news={news} num="11"/>
      </div>
      <hr/>
      <div className='flex mt-3'>
      <Home news={news} num="6"/>
      <Sidebar news={news} num="7"/>
      </div>
      <hr/>
      <div className='flex mt-3'>
      <Home news={news} num="3"/>
      <Sidebar news={news} num="8"/>
      </div>
      <hr/>
      <div className='flex mt-3'>
      <Home news={news} num="4"/>
      <Sidebar news={news} num="9"/>
      </div>
      <hr className='mt-1'/>
      <hr className='mt-1'/>
      <News searchRef={searchRef} search={search} news={news}/>
      <Footer setMenu={setMenu}/>
    </div>
  )
}

export default Main
