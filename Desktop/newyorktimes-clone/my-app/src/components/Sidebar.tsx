import React from 'react'
import { Link } from 'react-router-dom'

interface newsProp {
    news:any
    num:any
}

const Sidebar = (props:newsProp) => {
  return (
    <div className='w-4/12 ml-3 border border-l-black p-3'>
      <Link to="/details" state={{data:props?.news[`${props.num}`]}}>
      <div>
      <img className='w-80 h-60' src={props?.news[`${props.num}`]?.urlToImage}/>
      <h1 className='text-2xl font-medium font-serif mt-7'>{props?.news[`${props.num}`]?.title}</h1>
      <h1 className='text-sm font-serif'>{props?.news[`${props.num}`]?.content}</h1>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
