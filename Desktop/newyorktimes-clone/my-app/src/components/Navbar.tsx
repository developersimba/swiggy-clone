import React, { useState } from 'react'
import menu from "../images/menu.png"
import lens from "../images/lens.png"
import moment from "moment"
import newyork from "../images/newyork.png"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


interface menuProp {
  setMenu:any
  setSearch:any
  searchRef:any
}

const Navbar = (props:menuProp) => {

  const [searchIcon,setSearchIcon] = useState(false)
  const [sideMenu,setSideMenu] = useState(false)

  const navigate = useNavigate()

  const logout = async() =>{
    try{
      await signOut(auth)
      toast.success("LoggedOut successfully")
      setTimeout(()=>{
        navigate("/")
      },2000)
    }catch(err){
      console.error(err)
    }
  }

    
  return (
    <>
    <ToastContainer autoClose={3000}/>
    <div className='grid grid-rows-3 pl-7'>
       <div className='flex items-center'>
          <img src={menu} className='w-5 h-5 cursor-pointer' onClick={()=>setSideMenu(true)}/>
          {sideMenu && <div onMouseLeave={()=>setSideMenu(false)} className='font-bold text-sm pl-5 pt-40 pb-4 z-10 absolute bg-white mt-52 shadow-2xl border border-gray-300 left-0 w-48 '>
            <h1 onClick={()=> props?.setMenu("Home")} className='mt-2 cursor-pointer'>Home Page</h1>
            <h1 onClick={()=> props?.setMenu("World")} className='mt-2 cursor-pointer'>World</h1>
            <h1 onClick={()=> props?.setMenu("Politics")} className='mt-2 cursor-pointer'>U.S.Politics</h1>
            <h1 onClick={()=> props?.setMenu("News")} className='mt-2 cursor-pointer'>U.S.News</h1>
            <h1 onClick={()=> props?.setMenu("Sports")} className='mt-2 cursor-pointer'>Sports</h1>
            <h1 onClick={()=> props?.setMenu("Health")} className='mt-2 cursor-pointer'>Health</h1>
            <h1 onClick={()=> props?.setMenu("Opinion")} className='mt-2 cursor-pointer'>Opinion</h1>
            <h1 onClick={()=> props?.setMenu("Science")} className='mt-2 cursor-pointer'>Science</h1>
            <h1 onClick={()=> props?.setMenu("Tech")} className='mt-2 cursor-pointer'>Tech</h1>
            <h1 onClick={()=> props?.setMenu("Arts")} className='mt-2 cursor-pointer'>Arts</h1>
            <h1 onClick={()=> props?.setMenu("Book")} className='mt-2 cursor-pointer'>Book review</h1>
            <h1 onClick={()=> props?.setMenu("Style")} className='mt-2 cursor-pointer'>Style</h1>
            <h1 onClick={()=> props?.setMenu("Food")} className='mt-2 cursor-pointer'>Food</h1>
            <h1 onClick={()=> props?.setMenu("Travel")} className='mt-2 cursor-pointer'>Travel</h1>
            <h1 onClick={()=> props?.setMenu("Magazine")} className='mt-2 cursor-pointer'>Magazine</h1>
          </div>}
          <img src={lens} onClick={()=> setSearchIcon(!searchIcon)} className='w-4 h-4 ml-5 cursor-pointer'/>
          {searchIcon && <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder='SEARCH' className='border border-black rounded-sm p-1 ml-3'/>}
          {searchIcon && <button onClick={()=> props?.searchRef?.current?.scrollIntoView({behavior:"smooth"})} className='bg-blue-100 text-white text-xs font-medium p-2 rounded-sm ml-1'>GO</button>}
          {searchIcon ? <h1 className='text-xs ml-36'>U.S.</h1>
          : <h1 className='text-xs ml-96'>U.S.</h1>}
          <h1 className='text-xs font-semibold ml-5'>INTERNATIONAL</h1>
          <h1 className='text-xs ml-5'>CANADA</h1>
          <h1 className='text-xs ml-5'>ESPANOL</h1>
          {auth?.currentUser?.displayName || auth?.currentUser?.email ?  <button className='ml-96 text-xs' onClick={logout}>LOGOUT</button>
          : <Link to="/login">
          <button className='text-xs ml-96 bg-slate-500 p-1 w-16
           text-white font-bold rounded-sm'>LOG IN</button>
          </Link>}
       </div>
       <div className='flex items-center'>
        <div>
        <h1 className='font-bold text-xs'>{moment(new Date()).format("DD-MM-YYYY")}</h1>
         <h1>Today's paper</h1>
        </div>
         <img src={newyork} className='w-96 h-16 ml-72'/> 
       </div>
       <div>
      <hr className='mt-2'/>
      <div className='flex items-center text-sm mt-3'>
        <h1 onClick={()=>props?.setMenu("US")} className='ml-52 cursor-pointer'>U.S.</h1>
        <h1 onClick={()=>props?.setMenu("World")} className='ml-7 cursor-pointer'>World</h1>
        <h1 onClick={()=>props?.setMenu("Business")} className='ml-7 cursor-pointer'>Business</h1>
        <h1 onClick={()=>props?.setMenu("US")} className='ml-7 cursor-pointer'>Arts</h1>
        <h1 onClick={()=>props?.setMenu("Arts")} className='ml-7 cursor-pointer'>Lifestyle</h1>
        <h1 onClick={()=>props?.setMenu("Opinion")} className='ml-7 cursor-pointer'>Opinion</h1>
        <h1  className='ml-4'>|</h1>
        <h1 onClick={()=>props?.setMenu("Audio")} className='ml-5 cursor-pointer'>Audio</h1>
        <h1 onClick={()=>props?.setMenu("Games")} className='ml-7 cursor-pointer'>Games</h1>
        <h1 onClick={()=>props?.setMenu("Cooking")} className='ml-7 cursor-pointer'>Cooking</h1>
        <h1 onClick={()=>props?.setMenu("Wirecutter")} className='ml-7 cursor-pointer'>Wirecutter</h1>
        <h1 onClick={()=>props?.setMenu("Athletic")}  className='ml-7 cursor-pointer'>The Athletic</h1>
      </div>
      <hr className='mt-2'/>
      <hr className='mt-1'/>
       </div>
    </div>
    </>
   
  )
}

export default Navbar
