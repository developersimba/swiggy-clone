import React from 'react'
import newyork from "../images/newyork.png"

interface menuProp{
  setMenu?:any
}

const Footer = (props:menuProp) => {
  return (
    <div className='p-7'>
        <div>
         <hr/>
         <hr className='mt-1'/>
         <img src={newyork} className='w-52 h-8 mt-3'/>
         <div className='flex items-center justify-between p-4'>
            <div>
            <h1 className='font-bold text-sm'>NEWS</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("home")}>Home Page</h1>
            <h1 className='cursor-pointer'  onClick={()=> props?.setMenu("World")}>World</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Coronavirus")}>Coronavirus</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("US")}>U.S.World</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("politics")}>U.S.Politics</h1>
            </div>
            <div>
            <h1 className='font-bold text-sm'>OPINION</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("opinion")}>Today's Opinion</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Editorials")}>Editorials</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("video")}>Opinion video</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Letters")}>Letters</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("columnists")}>columnists</h1>
            </div>
            <div>
            <h1 className='font-bold text-sm'>ARTS</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Movies")}>Movies</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Books")}>Books</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Video")}>Video</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Music")}>Music</h1>
            <h2 className='cursor-pointer' onClick={()=> props?.setMenu("Dance")}>Dance</h2>
            </div>
            <div>
            <h1 className='font-bold text-sm'>LIVING</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Food")}>Food</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Health")}>Health</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Travel")}>Travel</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Love")}>Love</h1>
            <h2 className='cursor-pointer' onClick={()=> props?.setMenu("Job")}>Job</h2>
            </div>
            <div>
            <h1 className='font-bold text-sm'>MORE</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Cooking")}>Cooking</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Graphics")}>Graphics</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Podcasts")}>Podcasts</h1>
            <h1 className='cursor-pointer' onClick={()=> props?.setMenu("Video")}>Video</h1>
            <h2 className='cursor-pointer' onClick={()=> props?.setMenu("Articles")}>Articles</h2>
            </div>
         </div>
        </div>
        <hr/>
      <h1 className='mt-3 text-xs text-center'>© 2023 The New York Times Company
       NYTCoContact UsAccessibilityWork with usAdvertiseT Brand StudioYour
        Ad ChoicesPrivacy PolicyTerms of ServiceTerms of SaleSite MapHelpSubscriptions</h1>
    </div>
  )
}

export default Footer
